// Generated by CoffeeScript 1.3.3
'use strict';

var CreateSubscriberCtrl, EditSubscriberCtrl, ListSubscriberCtrl, SubscriberInfoCtrl;

ListSubscriberCtrl = function($http, $scope) {
  var getSubscribers;
  getSubscribers = function() {
    var req;
    req = $http.get('subscribers');
    req.success(function(subscribers) {
      return $scope.subscribers = subscribers;
    });
  };
  getSubscribers();
  $scope.del = function(s) {
    var req;
    req = $http["delete"]('subscribers/' + s.customerNo);
    req.success(function() {
      getSubscribers();
    });
  };
};

ListSubscriberCtrl.$inject = ['$http', '$scope'];

CreateSubscriberCtrl = function($scope, $http, $location) {
  $scope.mode = 'create';
  $scope.subscriber = new Subscriber;
  return $scope.create = function(s) {
    var req;
    req = $http.post('subscribers', s);
    return req.success(function(subscriber) {
      $location.path('/subscribers');
    });
  };
};

CreateSubscriberCtrl.$inject = ['$scope', '$http', '$location'];

SubscriberInfoCtrl = function($scope, $routeParams, SubscriberService) {
  var subscriber;
  subscriber = SubscriberService.get($routeParams, function() {
    delete $scope.subscriber;
    $scope.subscriber = new Subscriber(subscriber);
  });
  $scope.displayInfo = function(info) {
    return info || 'No Information';
  };
  $scope.getInfoClass = function(info) {
    if (!info) {
      return 'info-undefined';
    }
  };
};

SubscriberInfoCtrl.$inject = ['$scope', '$routeParams', 'SubscriberService'];

EditSubscriberCtrl = function($scope, $routeParams, $location, SubscriberService) {
  var subscriber;
  $scope.mode = 'edit';
  subscriber = SubscriberService.get($routeParams, function() {
    delete $scope.subscriber;
    return $scope.subscriber = new Subscriber(subscriber);
  });
  return $scope.save = function(s) {
    SubscriberService.update(s, function() {
      var customerNo;
      customerNo = subscriber.customerNo;
      $location.path("/subscribers/" + customerNo);
    });
  };
};

EditSubscriberCtrl.$inject = ['$scope', '$routeParams', '$location', 'SubscriberService'];
