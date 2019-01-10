//在完成所有系统响应reducer这部分代码之后，
//我们来写组件，首先在componments里面新建App.js
//新建一个顶层App 里面添加react的render方法
//AddTodo          对应了todolist的头部部分
//VisibleTodoList  对应了tdolist的列表部分
//Footer           对应了filter部分
import React from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer"; 
import AddTodoTwo from "./AddTodoTwo"
import InputAddList from "./inputAddList"
//写完大家看上去可能不太一样，分布在不同的层级，
//这就是我们之前提到的组件分为两种 一种是container 一种是coomponents
//container 是用来决定怎么工作的，是直接和数据流相关的，或者说是来表现逻辑的
//components 是来决定如何显示是跟样式相关的，它是来决定这个页面最后来表现成什么样子
//所以我们会把组件分成这样的两类，其实是为了怎么更好的复用，因为这一类大家知道，它主要
//来决定怎么显示的，主要是一些样式和布局，所以它很容易被复用，
//然后我们分别去实现这三个组件，首先是第一个AddTodo，是添加代办项的组件
//它放在了container里边，所以我们知道它是一个关乎逻辑的组件，新建这个AddTodo这个文件
const App=()=>(
      <div>
      	<AddTodo/>              
      	<VisibleTodoList/>
      	<Footer/>
      	<InputAddList/>
      </div>
	)

export default  App;