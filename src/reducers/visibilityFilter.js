
//在处理完了代办项，以及代办项列表，那么下面这个筛选器也是要响应的。
//这里里面来放筛选器的一个响应，
//我们能看出来它跟代办项和代办项列表是非常相似的，以及格式都是一致的
import { VisibilityFilters } from '../actions'
const visibeilityFilter=(state=VisibilityFilters.SHOW_ALL,action)=>{//这里有一个小技巧，使用es6给它一个初始值
	                                //这样当打开页面的时候，它就是首先显示已有
                                  //的代办项列表，同时filter筛选项有一个默认的active
    switch(action.type){
    	case "SET_VISIBILITY":
    	    return action.filter;  //这里我们看的出来，它return的不是一个对象而是一个字符串了
    	default:
    	    return state;        //那么我们现在看下状态树的一个情况，其实这个状态树
    	                         //是我们开发一个系统之前就是考虑号的，
    	                         //比如我们现在做的这个todoList,
    	                         //怎么样用一个状态树去描述它，就是这个系统
    	                         //背后数据运转的是什么样子
    	                         //在开发完这个todoList可以使用this.state打印出来
    	                         //看下它的一个状态，它会有一个todo，todo里面就是一条条
    	                         //的代办项数据，还有一个visibilityFilter也就是我们现在
    	                         //要显示那些代办项以及哪一类的代办项这样的一个filter，
    	                         //它其实就是一个string,s所以我们这里的这个reducer返回的就是一个string
    	                         //也就是action里面的visibilityFilter,
    }
}
export default visibeilityFilter;