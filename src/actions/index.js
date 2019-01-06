/*
在搞清楚项目结构以后，我们写一个项目，首先action中新建一个index.js文件，
把它放在actin中，代表的是用户的行为action,
首先我们看下项目做完是个什么样子，
 有个输入框可以输入代办项，点击Add Todo,缓存到输入框下面，
 用户点击被选中，在点击取消选中，
 有两个筛选条件，分别是Active和Completed,
 点击active表示未被选中的，点击completed表示已经被选中的
 点击All显示所有的代办项
 用户行为有 Add Todo
   action解释
        action是行为的抽象
        是普通JS对象
        一般由方法生成
        必须有一个type
**/
let nextTodoId=0;
//用户输入代办项，点击addTodo添加代办项g
 export const addTodo=(text)=>{
 	return{
 		type:"ADD_TODO",
 		id:nextTodoId,   //代办项的id用来表示代办项的唯一性 nextTodoId是代办项的初始化id为0
 		text             //代办项的描述内容
 	}
 }
 //用户点击All active completed过滤用户的代办项
 export const setVisibility=(filter)=>{
 	return{
 		type:"SET_VISIBILITY",
 		filter         //filter是用来过滤已完成还是代办的，还是全部的
 	}
 }
 //用户点击代办项是否已完成
 export const toggleTodo=(id)=>{
 	return{
 		type:"TOGGLE_TODO",
 		id
 	}
 }