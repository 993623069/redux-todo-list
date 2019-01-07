//这里我们首先看下container里面的组件，一般都是由react redux生成的
//并不是我们完全手写出来的，一般来说AddTodo使用connect这样一个方法
//生成然后再使用export导出去，这样就可以再其它文件中进行调用


import { connect } from "react-redux";
import { appTodo } from "../actions";
let AppTodo=({dispatch})=>{
	//这个return对象就是react常规开发render的方法
	//在这里面去写jsx,告诉要render一个什么样的东西
	//我们首先看下这个container的一个基本结构
	//AddTodo就是一个普通方法，这样一个普通方法去生成了一个这样的对象
	//这个对象就是react里面render的对象，或者可以看做一个render方法
	//然后这个方法由connect，这个方法是由react-redux提供的方法
	//来生成connect这样的组件
	//connect()(AppTodo);高级写法，还可以在前面的（）传入一些东西
	//对后面的AppTodo进行一个装饰，进行一个增强，然后你在后面会看到，
	//onSubmit来通过dispatch来触发来进行一些提交，把相关的eaction提交给数据流
	//那么这里这个dispach就是store里面的dispatch，这个组件是可以接受它的
	//submit的时候传入一个方法
	let input;//绑定ref可以直接通过变量拿到value
	return(
          <div>
          	 <from onSubmit={e=>{
          	 	e.preventDefault();//阻止默认提交
          	 	if(!input.value.trim()){return}//这里检查下，没有输入没有意义的东西
          	 		                           //就return回去，不做相关的处理
          	 		                           //否则就是dispatch
          	 		                           //使用dispaatch调用用户点击提交响应的action
          	 		                           //import AddTod action
          	 	dispatch(appTodo(input.value)); //它就是把dispatch和显示混和在了一起
          	 	                                //它是一个container我们把它放在了container里面
          	 	                                //但是没有抽取任何和逻辑无关的component
          	 	                                //这种做法对于很简单的react没有什么问题
          	 	                                //但是我们想把显示和逻辑进行分离，该怎么做那，
          	 	                                //我们来看这样一个例子，来写第二个container
          	 	input.value="";//提交add完清空input.value
          	 }}>
          	 	<input ref={node => {input=node}}/>
          	 	<button type="submit" >Add Todo</button>
          	 </from>
          </div>
		)
}
AppTodo=connect()(AppTodo);

export default AppTodo;