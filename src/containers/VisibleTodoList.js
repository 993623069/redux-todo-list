//首先把所使用的方法等引进来
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
const getVisibleTodos=(todos,filter)=>{
	switch(filter){
		case "SHOW_ALL":
		     return todos;
		case "SHOW_COMPLETED":
		     return todos.filter(t=>t.completed)
		case "SHOW_ACTION":
		     return todos.filter(t => !t.completed)
	}//
}
const mapStateToProps=(state)=>{ //这里我们写了一个它的state怎么转换props的
	return{      //它传入一个state,经过getVisibleTodos在进行一个处理
		         //然后这个方法会传入一个todos和一个visibilityFilter
		         //然后返回todos作为当前组件的props
		todos:getVisibleTodos(state.todos,state.visibilityFilter)
	}
}
//在这里编写dispatch怎么影响属性props，
const mapDispatchToProps=(dispatch)=>{
    onTodoClick:(id)={
    	dispatch(toggleTodo(id))  //看完这个大部分同学就已经晕了
    	                          //dispatch是一个传入分发器
    	                          //dispatch可以用户的行为直接进行一个分发
    	                          //分发之后，分发到定义好的action上面
    	                          //toggleTodo就是定义号的action
    	                          //这个action要传入一个ID
    }
}
const VisibleTodoList=connect(
       //这里就不能空着了 需要传入两类参数
       mapStateToProps,  //其实我们知道react组件它是由两类
                         //1.类是state来进行转换的，也就是当我点击一个按钮或者是进行一个操作的时候
                         //那么它的状态会发生变化，当它的状态发生变化的时候，它的props它的属性也要跟着变化
                         //另一类是通过dispatch来引起的属性变化，
                         //那么这两类只要我能明确出来，我的状态变化的时候，怎么影响这个组件的属性
                         //当我由一个行为要分发的时候，dispatch怎么影响组件的属性，那么这两类只要我能明确出来，
                         //我的状态变化的时候怎么影响组件的属性，当有一个行为要被分发的时候，dispatch怎么影响组件的属性
                         //就可以明确这个组件所有要接受的这个变化了，拿这里我们先把这两个东西写出来，再来理解就容易多了
                         //
       mapDispatchToProps
       //以上连个方法被connect组合之后被传入到todolist中，传入到这样一个组件里面去。
       //就可以在TodoList中来用传进来的东西
	)(TodoList)


//写道这里大家看到我把显示组件和逻辑组件进行了分离