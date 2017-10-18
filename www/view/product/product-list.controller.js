/**
 * Created by Administrator on 2017/10/10.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl', ['$scope', '$ionicLoading', '$timeout', '$filter', function ($scope, $ionicLoading, $timeout, $filter) {
      $scope.products = [];
      $scope.searchMV = {
        content: ''
      };
      $scope.hasMore = true;
      var isLoading = false;
      var pageIndex = 1;

      $scope.$on('$ionicView.enter', function () {
        $ionicLoading.show({
          template: '<ion-spinner icon="ios" class="spinner-light"></ion-spinner>数据加载中，请稍候.....'
        });
        $scope.doRefresh();
      });

      $scope.getByName = function () {
        $scope.products = $filter('filter')($scope.sourceProducts, {
          Name: $scope.searchMV.content
        });
      };

      $scope.doRefresh = function () {
        pageIndex = 1;
        $scope.hasMore = true;
        $scope.products = [];
        loadData();
      };
      $scope.loadMore = function () {
        pageIndex++;
        loadData();
      };
      function loadData() {
        if (isLoading == true) {
          return;
        }
        isLoading = true;
        $timeout(function () {
          var list = [
            {
              ID: 1,
              Images: ['view/product/images/1.jpg'],
              Name: 'iphone5',
              Price: '5332.00',
              Store: 12,
              Barcode: '121212131'
            }
            ,
            {
              ID: 2,
              Images: ['view/product/images/2.jpg'],
              Name: 'node7',
              Price: '5352.00',
              Store: 12,
              Barcode: '121212131'
            }
            ,
            {
              ID: 3,
              Images: ['view/product/images/3.jpg'],
              Name: 'iphone7',
              Price: '4000.00',
              Store: 12,
              Barcode: '121212131'
            }
            ,
            {
              ID: 4,
              Images: ['view/product/images/c_goodspicture.png'],
              Name: 'node85',
              Price: '5352.00',
              Store: 12,
              Barcode: '121212131'
            },
            {
              ID: 5,
              Images: ['view/product/images/c_goodspicture.png'],
              Name: 'node8',
              Price: '5352.00',
              Store: 12,
              Barcode: '121212131'
            }
            , {
              ID: 6,
              Images: ['view/product/images/c_goodspicture.png'],
              Name: 'node3',
              Price: '5352.00',
              Store: 12,
              Barcode: '121212131'
            },
            {
              ID: 7,
              Images: ['view/product/images/c_goodspicture.png'],
              Name: 'node7',
              Price: '5352.00',
              Store: 12,
              Barcode: '121212131'
            }, {
              ID: 8,
              Images: ['view/product/images/c_goodspicture.png'],
              Name: 'mi8',
              Price: '5352.00',
              Store: 12,
              Barcode: '121212131'
            },
            {
              ID: 9,
              Images: ['view/product/images/c_goodspicture.png'],
              Name: 'meizu1',
              Price: '5352.00',
              Store: 12,
              Barcode: '121212131'
            },
            {
              ID: 10,
              Images: ['view/product/images/c_goodspicture.png'],
              Name: 'huawei1',
              Price: '4275.00',
              Store: 12,
              Barcode: '121212131'
            },
            {
              ID: 11,
              Images: ['view/product/images/c_goodspicture.png'],
              Name: 'huawei5',
              Price: '3333.00',
              Store: 12,
              Barcode: '121212131'
            },
          ];
          $scope.products = $scope.products.concat(list);
          $scope.sourceProducts = angular.copy($scope.products);
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          $ionicLoading.hide();
          isLoading=false;
          if (pageIndex == 3) {
            $scope.hasMore = false;
          }
        }, 3000);
      }
    }])
})();
