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
		 case "TOGGLE_TODO":       //toggle代办项也就是把它已完成值为未完成，或者完成值为未完成
		    if(state.id !== action.id){
                  return state;
		    }
		    return Object.assign({},state,{
		    	completed:state.completed      //这里我们这里用了一个es6的assign把state进行了合并
		    })
		  }
	}
}