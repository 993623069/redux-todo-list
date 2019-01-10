//然后我们在建一个index.js来代表我们整个的reducer
//这个时候rreact-redux给我们提供了一个方法，
//把这种写在各处的reducer给合并起来，
//把在各处的reducer使用export导出来
//只有把各处的reducer export出来
//使用import引进来才能用,引进来之后在从redux中取出combinereducers
//然后就可以把它们各个拆分在每个文件中的reducer合并在一起
//然后在把它在export出去
//这样就写完了整个系统对用户的响应
import todos from "./todos";
import visibeilityFilter from "./visibilityFilter";
import { combineReducers } from "redux";

const todoApp=combineReducers({
	todos,
	visibeilityFilter
})
export default todoApp;