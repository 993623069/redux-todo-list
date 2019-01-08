//根据组件化根据todolist要显示这个列表
//需要写个todo组件，可以把它写在另外一个位置,先实现这个todolist
//这个组件只关乎布局和样式，这些和逻辑无关的东西
import React from 'react';
import Todo from "./Todo";
const TodoList = ({ todos , onTodoClick})=>{
	            //这里面这个todos就是store里面的todos
	            //这里面的每一个Todo,就会生成Todo这样一个组件
	            //这个组件还没有写，但是大家能看到，我会传进入一个key
	            //然后会todo里面的，所有东西，就是es6的语法糖，
	            //其实它就是等价于去传todo里面的completed,等于todo.completed
	            //text等于text
	            //onClick就是调用传进来的onTodoClick的方法
	            //
	return (
		<ul>
		{
			todos.map(todo=>{
			  return  <Todo key={todo.id} 
			      {...todo} 
			      onClick={()=>onTodoClick(todo.id)}/>
			      //到这里大家可能还是不太清楚，但是已经看到已经很眼熟的东西啦，
			      //我们首先来看这个TodoList,这是一个跟逻辑无关的，这是一个纯显示的组件
			      //它只关乎到显示和布局，而我们这里没有任何样式和布局，来看下它传入的todos
			      //和onTodoClick是哪来的，显然它就是props的todos,和onTodoClick,

		 })
		}
	</ul>)
}
export default  TodoList;