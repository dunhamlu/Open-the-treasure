// function main($scope,$http){

//     var num="2345";
//     // console.log($scope);
//     //在作用域上定义变量，然后在html中用{{}}调用,调用时写定义的变量名
//     $scope.txt="1406c";
//     $scope.hello="hello";
//     $scope.show=function(nums){
//         //父级向子级传递变量（需要依靠在事件中才能广播过去）
//         $scope.$broadcast("datalist",nums)   
//         console.log(nums)
//     }
//     //获取子级中的变量
//     $scope.$on("childdatas",function(err,data){
//         //console.log(data)
//     })
// }
// function render($scope){
//     //也可以在$scope作用域上绑定方法
//     $scope.json=[
//         {name:"zs","age":22},
//         {name:"ls","age":42},
//         {name:"zw","age":232}
//     ]
//     $scope.getAge=function(num){
//         console.log(num)
//     }
//     //在自己获取父级中的变量
//     $scope.$on("mainlist",function(err,data){
//         console.log(data)
//     })
//     var age="220";
//     //广播子级中的变量给父级（无需依靠事件的触发）
//     $scope.$emit("childdatas",age)
// }

// function index($scope,$location,$rootScope){
//     console.log('index控制器')
//     // console.log($rootScope)

// }
// function user($scope,$location,$rootScope){
//     console.log('user控制器')
//     var user = 'user'
//     $rootScope.user = user;
// }



function list($scope,$location){


    $scope.lArr = [
        {'name':'中文','id':1,'msg':'','isActive':false},
        {'name':'英语','id':2,'msg':'','isActive':false},
        {'name':'法语','id':3,'msg':'','isActive':false}
    ]
    $scope.sArr = [];
    $scope.changeTxt = function(msg,id){
        $scope.lArr[id-1].msg = msg;
        $scope.lArr[id-1].isActive = true;

        if(!msg){
            $scope.lArr[id-1].isActive = false;
        }
        console.log($scope.lArr)

    }
    $scope.selected = ''

    $scope.sub = function(){
        $scope.isShow = true;
        for(var i = 0;i<$scope.lArr.length;i++){
            if($scope.lArr[i].isActive){
                $scope.sArr.push($scope.lArr[i].name)
            }
        }
    }

    $scope.newArr = [
        {'name':'zs1','age':18},
        {'name':'zs2','age':19},
        {'name':'zs3','age':20},
        {'name':'zs4','age':21},
        {'name':'zs5','age':22},
    ]



}





// function product($scope,$location){
//     console.log('product控制器')
//     $scope.getUser = function(){
//         // console.log($location.search().id)
//         $location.path('/home/user')
//     }
// }
angular.module("app")
       //.controller("main",main)
       // .controller('render',render)
       // .controller('index',index)
        .controller('list',list)
       // .controller('user',user)
       // .controller('product',product)
