angular.module('brighter.my-directive', []).
.directive('brighterSubmitButton', function() {
        return {
            restrict: 'A',
            scope: {
                buttonText: "@",
                loadingText: "@",
                enableButton: "="
            },
            link: function ($scope, ele) {
                var defaultSaveText = $scope.buttonText ? $scope.buttonText : ele.html();

                ele.bind('click', function(){
                    ele.attr('disabled','disabled');
                    ele.html($scope.loadingText);
                });

                $scope.$watch('enableButton', function() {
                    ele.removeAttr('disabled');
                    ele.html(defaultSaveText);
                });
            }
        };
    });
