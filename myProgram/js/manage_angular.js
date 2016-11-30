/**
 * Created by Administrator on 2016/11/30.
 */


var employees=employee.employees;   // 数据
var perPageList=1;         //每页数据条数
var page=Math.ceil(employees.length/perPageList);     //总页数
var pageNumber=[];    //页码
var onPage=1;          //当前页
var pageList=[];   //当前页数据集合
var nextPage=2;         //下一页
var prePage=0;          //上一页

for(var i=0;i<perPageList;i++){
    pageList.push(employees[i]);
}

for(var i=0;i<page;i++){    //显示的页码
    pageNumber[i]=i+1;
    if(page>5){
        pageNumber=[1,2,3,4,5];
    }
}

function lastPageList(employees,perPageList){   //最后一页数据条数
    var lastPageList=employees%perPageList;
    return lastPageList;
}


var app2=angular.module("module2",[]);
app2.controller("control2",function($scope){
    $scope.employee=pageList;
    $scope.pageNumber=pageNumber;

    $scope.checkPage= function (number) {
        console.log(number);
        angular.element(".next").removeClass("disabled");
        angular.element(".previous").removeClass("disabled");


        //判断是否为最后一页
        if(number==page)
        {
            onPage=number;    //最后页码
            pageList=[];    //最后页数据集合

            var onPageListStart=perPageList*onPage-perPageList;  //当前页数据起始索引
            for(var i=onPageListStart;i<employees.length;i++){
                pageList.push(employees[i]);
            }
            //console.log(pageList);
            $scope.employee=pageList;
        }
        // 非最后页
        else{
            onPage=number;
            pageList=[];
            var onPageListStart=perPageList*onPage-perPageList;  //当前页数据起始索引
            var onPageListEnd=perPageList*onPage-1;   //当前页数据结束索引
            for(var i=onPageListStart;i<=onPageListEnd;i++){
                pageList.push(employees[i]);
            }
            //console.log(pageList);
            $scope.employee=pageList;
        }

    };

    $scope.nextPage= function () {
        if(pageNumber[pageNumber.length-1]==page){
            angular.element(".next").addClass("disabled");
        }
        else{
            for(x in pageNumber){
                pageNumber[x]+=1;
            }

        }
    };

    $scope.previousPage= function () {
        if(pageNumber[0]==1){
            angular.element(".previous").addClass("disabled");
        }
        else{
            for(x in pageNumber){
                pageNumber[x]-=1;
            }

        }
    };

});

$(function() {

    $(".pagination").on("click","li",function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

});