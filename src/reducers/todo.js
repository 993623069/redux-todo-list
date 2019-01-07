/*
写完用户的行为后，我们就来写响应，reducers，放在reducers目录下面
   reducer的描述
       是响应的抽象
       是纯方法  不能在这个方法中使用ajax和获取用户当前时间等 因为这样它就不是个纯方法了 也就是说它的输出不是由输入来决定的
       传入旧状态action
       返回新状态
  然后我们再来看这个项目，对那些用户操作做出一些响应，
  首先是上面这部分，代办项和添加代办项要响应
  现在写一个代办项和代办项列表的响应
  todo.js
  首先我们来写代办项 也就是代办项每一项怎么响应action action有三种行为 添加 设置 和可见 还有触发
  这三种能影响我的代办项的有添加和触发
  那么我们先写然后再看
**/

const todo=(state,action)=>{
	switch(action.type){
		case "ADD_TODO":
		  return{
		  	id:action.id,
		  	text,action.text,
		  	completed:false,       //这里我们来看下，我们写了一个方法，这个方法我根据传入的action以及旧的state来决定一个新的state
		  	                       //state就是我们的状态树，以及我们完整的描述这个代办项所需要的对象
		  	                       //对于这个代办项，首先要有个id 和 描述代办项的text 然后有一个completed是它完成的状态
		  	                       //对于打横线的就是true 对于没有打横线的就是false
		  	                       //那么这个todo的state 也就是这个object就描述了这个代办项
		  	                       //根据这里这个旧的state返回一个新的state 这是添加一个代办项的时候进行的响应
		    }
		 case "TOGGLE_TODO":       //toggle代办项也就是把它已完成值为未完成，或者完成值为未完成
		    if(state.id !== action.id){
                  return state;            //如果点击的代办项与原有的代办项不一致原样返回
		    }
		    return Object.assign({},state,{
		    	completed:!state.completed      //这里我们这里用了一个es6的assign把state进行了合并
		    	                                //在这里把这个传进来的completed进行取反，然后和旧的state进行合并
		    	                                //这里有点小技巧大家可能还不太明白，等写完这个TodoList大家可能就会明白了
		    	                                //
		    })
		    default:
		      return state;  //如果传进来的action的type不知道是个什么样的时候，就返回原有的state
		                     //实际在项目中这个分支是用不到的，根据语法规则写出来
		  
	}
}
//写全部代办项，代办项列表的一个响应
//所有的reducer写法基本都是一样
//根据action传入的type来进行响应
const todos=(state,action)=>{
	switch(action.type){
		case "ADD_TODO": //如果是ADD TODO
		    return[
                ...state,//这里注意啦，现在我们看下代办项列表，
                         //这里很显然通过todo返回的数组和state进行合并成一个新的数组
                todo(undefined,action)
		    ]
		 case "TOGGLE_TODO":
		     //那么当toggle todo的时候，那么我就可以很简单的
		     //把state传进来的list里面的每一个todo
		     //所代表的每一个state来传到这个方法里面去，
		     //然后用todo里面的toggleTodo处理一遍
		     //在处理的过程中会对completed进行一个转换
		     //然后在生成一个新的state
		     return state.map(t=>todo(t,action));
		  default:
             return state;//按照惯例给它写一个default
	}
}
//这就是reducer方法，这个方法传入一个旧的状态，然后传入一个操作
//或者说一个输入，然后得到一个新的状态，这就是一个系统的响应


export default todos;