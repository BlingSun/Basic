/**
 * Created by Administrator on 2016/11/30.
 */


var employees=employee.employees;   // ����
var perPageList=1;         //ÿҳ��������
var page=Math.ceil(employees.length/perPageList);     //��ҳ��
var pageNumber=[];    //ҳ��
var onPage=1;          //��ǰҳ
var pageList=[];   //��ǰҳ���ݼ���
var nextPage=2;         //��һҳ
var prePage=0;          //��һҳ

for(var i=0;i<perPageList;i++){
    pageList.push(employees[i]);
}

for(var i=0;i<page;i++){    //��ʾ��ҳ��
    pageNumber[i]=i+1;
    if(page>5){
        pageNumber=[1,2,3,4,5];
    }
}

function lastPageList(employees,perPageList){   //���һҳ��������
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


        //�ж��Ƿ�Ϊ���һҳ
        if(number==page)
        {
            onPage=number;    //���ҳ��
            pageList=[];    //���ҳ���ݼ���

            var onPageListStart=perPageList*onPage-perPageList;  //��ǰҳ������ʼ����
            for(var i=onPageListStart;i<employees.length;i++){
                pageList.push(employees[i]);
            }
            //console.log(pageList);
            $scope.employee=pageList;
        }
        // �����ҳ
        else{
            onPage=number;
            pageList=[];
            var onPageListStart=perPageList*onPage-perPageList;  //��ǰҳ������ʼ����
            var onPageListEnd=perPageList*onPage-1;   //��ǰҳ���ݽ�������
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