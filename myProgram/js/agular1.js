/**
 * Created by Administrator on 2016/11/29.
 */

var accounts=account.accounts;  //json数据存储账号

var app=angular.module("module1",['ngAnimate']);
app.controller("control1",function($scope){
    $scope.name="Shen Duanhe";
    $scope.password="123456";
    $scope.errorPassword="";
    $scope.errorName="";


    $scope.checkAccount=function(){
        for(var i=0;i<accounts.length;i++) {
            if ($scope.name == accounts[i].name) {
                if ($scope.password == accounts[i].password) {
                    window.open("../html/manage_index.html","_self");
                    return
                }
                else{
                    $scope.errorPassword="密码错误";
                    console.log($scope.errorPassword);

                    return
                }
            }
            if(($scope.name!=null)&&(i==(accounts.length-1))){
                $scope.errorName="该用户不存在";
                console.log($scope.errorName);
            }
        }

    }
    $scope.reInput=function(){
        $scope.errorPassword="";
        $scope.errorName="";

    }


});

