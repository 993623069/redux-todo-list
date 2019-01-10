import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
let store =createStore(todoApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//最后要在它的入口文件上对它进行一个包装
//这个createStore是redux提供给我们的
//它把所有的reducer通过响应，来推断出我们的store来是个什么样子
//然后通过Provider这样一个算是组件的包装器
//把写好的顶层组件包装起来
//最后使用react的render方法把它渲染在节点上
//
console.log(store.getState())
console.log(store.dispatch({
 		type:"ADD_TODO",
 		id:0,   
 		text:"text"            
 	}))
console.log(store.getState())
console.log(store.getState())
ReactDOM.render(
	<Provider store={store}>
	  <App/>, 
    </Provider>,
	  document.getElementById('root')

)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
