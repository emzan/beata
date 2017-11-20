angular.module('app.controllers', [])
  //this is my second attempt
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('beataTeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {




}




])

.controller('yourMenuOrEventCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}



 ])

.controller('page29Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('aboutBeataTeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('ourMenuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('eventsCtrl', ['$scope', '$stateParams', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray) {

    $scope.data = {
        'id': '0',
        'event0': '',
        'event1': '',
        'event2': '',
        'event3': '',
        'event4': '',
        'event5': '',
        'event6': '',
        'name':'',
        'event':'',
        'food':'',
        'phone':''

    }

      var ref = firebase.database().ref().child("Martedi");
      // create a synchronized array
      $scope.days = $firebaseArray(ref);



      }



])

.controller('page10Ctrl', ['$scope', '$stateParams', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray) {

    $scope.data = {
        'id': '0',
        'event0': '',
        'event1': '',
        'event2': '',
        'event3': '',
        'event4': '',
        'event5': '',
        'event6': '',
        'name':'',
        'event':'',
        'food':'',
        'phone':''

    }

      var ref = firebase.database().ref().child("Martedi");
      // create a synchronized array
      $scope.days = $firebaseArray(ref);



      }



])

.controller('myEventCtrl', ['$scope', '$stateParams', 'Survey', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey, $ionicPopup) {


    $scope.data = {

    'name' : $stateParams.name,
    'event': $stateParams.event,
    'food': $stateParams.food,
    'phone':  $stateParams.phone


    };

    $scope.submitting = false;

    $scope.submit = function(){
        $scope.submitting = true;
        Survey.add($scope.data).then(function(){
            $scope.data = {
        name : '',
        phone:'',
        event: '',
        food:''


            }

            $scope.submitting = false;

            $ionicPopup.alert({
                title: '謝謝您!',
                template: '我們收到了您的資料.'
            });



            //$state.go('yourOrder', $scope.fields);
        })

}
}])

.controller('page11Ctrl', ['$scope', '$stateParams', 'Survey', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey, $ionicPopup) {


    $scope.data = {

    'name' : $stateParams.name,
    'event': $stateParams.event,
    'food': $stateParams.food,
    'phone':  $stateParams.phone


    };

    $scope.submitting = false;

    $scope.submit = function(){
        $scope.submitting = true;
        Survey.add($scope.data).then(function(){
            $scope.data = {
        name : '',
        phone:'',
        event: '',
        food:''


            }

            $scope.submitting = false;

            $ionicPopup.alert({
                title: '謝謝您!',
                template: '我們收到了您的資料.'
            });



            //$state.go('yourOrder', $scope.fields);
        })

}
}])
