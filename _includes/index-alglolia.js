function flatAlgoliaIndex(params) {
  window.addEventListener('load', function () {
    var locale = '{{page.locale}}';
    if  (locale.length === 0) {
      locale = 'en';
    }
    var i18n = params.i18n;

    var search = instantsearch({
      appId: '4NUHS4DS6H',
      apiKey: '5610d85268f93eafca9a82d8de096ca4',
      indexName: 'production_help_en',
      searchParameters: {
        facetsRefinements: {
          locale: [locale],
        },
      },
      routing: true,
    });

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: i18n.placeholder
      })
    );

    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          empty: '<div class="hhome-cards">' +
              '<a class="card card-support" href="/help/support">' +
                '<img src="/help/assets/img/home-email.svg">' +
                '<div class="t">' +
                  '<h2>' + i18n.notFoundTitle + '</h2>' +
                  '<div class="description">' + i18n.notFoundDescription + '</div>' +
                '</div>' +
              '</a>' +
            '</div>',
          item: function (hit) {
            hit._highlightResult.title = hit._highlightResult.title || { value: hit.slug || 'Untitled' };
            hit._highlightResult.html = hit._highlightResult.html || { value: '' };
            return '<div class="result-item" onclick="location.href = \'/help' + hit.url + '\';return false">' +
              '<a class="title result-link" href="/help' + hit.url + '"><span>' + hit._highlightResult.title.value + '</span><img src="/help/assets/img/arrow-circle-right.svg"></a>' +
              '<div class="doc-content">' + hit._highlightResult.html.value + '</div>' +
              '</div>';
          }
        },
      })
    );
    
    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination-container',
        maxPages: 10,
      })
    );
    
    search.addWidget(
      instantsearch.widgets.analytics({
        pushFunction: function (formattedParameters, state, results) {
          window.ga('set', 'page', '/help/search/?locale=' + locale + '&query=' + state.query + '&' + formattedParameters + '&numberOfHits=' + results.nbHits);
          window.ga('send', 'pageView');
        }
      })
    );

    search.on('render', function () {
      var input = document.getElementsByClassName('ais-search-box--input');
      if (input.length > 0) {
        var len = input[0].value.length;
        if (len > 0) {
          document.getElementById('cards').style.display = 'none';
          document.getElementById('results').style.display = null;
        }
        else {
          document.getElementById('cards').style.display = null;
          document.getElementById('results').style.display = 'none';
        }
      }
    });

    search.start();
  });
}