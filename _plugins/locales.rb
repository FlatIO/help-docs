# Copyright (c) 2019-2020 Vincent Giersch / Tutteo Limited
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# 'Software'), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Jekyll::Hooks.register :site, :pre_render do |site|
    # map pages per id & locale
    pages_map = Hash.new
    site.pages.each do |page|
        next if !page['nav']
        unique_pid = page['path'].split('/')[2..].join('/')
        locale = page.permalink.split('/').first
        page.data['locale'] = locale
        pages_map[unique_pid] ||= Hash.new
        pages_map[unique_pid][locale] = page
    end

    pages_map.each do |pid, trpages| 
        # build injected metas
        permalinks = Hash.new
        trpages.each do |locale, page|
            permalinks[locale] = page.url
        end

        # inject metas to pages
        locales = trpages.keys
        trpages.each do |locale, page|
            page.data['locales'] = locales
            page.data['multi_locales'] = locales.length > 1
            page.data['locales_links'] = permalinks
        end
    end
end