angular.module('directives', [])

.directive('newsArticle', function() {
  return {
    scope: {
      article: '='
    }, 
    templateUrl: '/app/partials/article.html'
  }
});