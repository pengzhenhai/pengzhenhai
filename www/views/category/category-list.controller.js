(function () {
  'use strict'
  angular.module('starter.controllers')
    .controller('CategoryListCtrl',['$scope','$ionicActionSheet','$ionicHistory', function ($scope,$ionicActionSheet,$ionicHistory) {
      $scope.categories = [
        {
          ID: 1,
          Name: '早餐',
          Children: [
            {
              ID: 11,
              Name: '豆浆',
              Children: []
            },
            {
              ID: 12,
              Name: '馒头',
              Children: []
            },
            {
              ID: 13,
              Name: '包子',
              Children: []
            },
            {
              ID: 14,
              Name: '面线糊',
              Children: []
            }
          ]
        },
        {
          ID: 2,
          Name: '午餐',
          Children: [
            {
              ID: 21,
              Name: '牛肉',
              Children: []
            },
            {
              ID: 22,
              Name: '猪肉',
              Children: []
            },
            {
              ID: 23,
              Name: '鸭肉',
              Children: []
            },
            {
              ID: 24,
              Name: '鸡肉',
              Children: []
            }
          ]
        },
        {
          ID: 3,
          Name: '晚餐',
          Children: [
            {
              ID: 31,
              Name: '茶叶蛋',
              Children: []
            },
            {
              ID: 32,
              Name: '鱼肉',
              Children: []
            },
            {
              ID: 33,
              Name: '排骨',
              Children: []
            },
            {
              ID: 34,
              Name: '腊汁肉',
              Children: []
            }
          ]
        },
        {
          ID: 4,
          Name: '饮料',
          Children: [
            {
              ID: 41,
              Name: '可乐',
              Children: []
            },
            {
              ID: 42,
              Name: '奶茶',
              Children: []
            },
            {
              ID: 43,
              Name: '苹果汁',
              Children: []
            },
            {
              ID: 44,
              Name: '芒果汁',
              Children: []
            }
          ]
        },
      ];
      $scope.activeCategory = {};
      $scope.activeCategory={};
      if ($scope.categories.length > 0) {
        $scope.activeCategory = $scope.categories[0];
      }
      $scope.seleCategory = function (index) {
        if ($scope.activeCategory.ID != $scope.categories[index].ID) {
          $scope.activeCategory = $scope.categories[index];
        }
      };
      $scope.selaCategory = function (data) {
        console.log(data);
        $scope.activeSubCategory = data;
        $ionicHistory.goBack();
      };
      $scope.showActionSheet = function () {
        $ionicActionSheet.show({
          buttons:[
            {
              text:'<b>新增小分类</b>'
            },
            {
              text:'编辑分类'
            }
          ],
         cancelText:'取消',
          buttonClicked:function (index) {
            switch(index){
              case 0:
                    $scope.gotoCategoryAdd();
                    break;
              case 1:

                    break;
            }
          },
          titleText:'更多操作'
        });
      };
      $scope.gotoCategoryAdd=function () {
        location.href='#/app/category-add/' +$scope.activeCategory.ID + '/' +$scope.activeCategory.Name;
      }
      $scope.selectSubCategory = function (data) {
        $scope.activeSubCategory=0;
      };
    }
    ]);
})();

