angular.module('directives', [])

.directive('newsArticle', function() {
  return {
    scope: {
      article: '='
    }, 
    transclude: true,
    templateUrl: '/app/partials/article.html'
  }
});