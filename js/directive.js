//directive.js是封装指令的js文件
/*
    注意点:1.封装的指令名在js中要用驼峰写法，在html标签上写的是a-b
            2.在指令函数中用return返回一个对象，对象中有一个link函数，在回调中有两个参数,分别为scope(作用域),element(元素标签)
*/
function testContent(){
    return  {
        link:function(scope,element){
            // console.log(element)
        }
    }
}
function pageTitle($rootScope){
	return {
		link:function(scope,element){
			var func = function(events,toState){
				var title = '1406c';
				if(toState.data && toState.data.title) title+="++++"+toState.data.title;
				element.text(title)
			}
			$rootScope.$on('$stateChangeStart',func)
		}
	}
}
//对于指令函数同样需要调用
angular.module("app")
        .directive("testContent",testContent)
        .directive('pageTitle',pageTitle)