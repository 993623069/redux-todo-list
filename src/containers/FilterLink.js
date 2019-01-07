import { connect } from "react-redux";
import Link from "../components/Link";
import { setVisibility } from "../actions"
//在引入完link,然后就是实现这个state怎么转换成Link组件的属性
//和dispatch怎么处理用户的输入或者说怎么生成用户的输入
//  用户点击鼠标或者用户输入文字都是用户的行为
//  作用在html上是一些event,这些event怎么转换成我们需要的action
//就是dispatch要实现的功能
//那么接下来写出来这样的一个方法

const mapStateToProps=(state,ownProps)=>{
	//这里state转换成props返回的是active这样的props
	//这个active的props是由ownProps.filter和state.visibilityFilter等不等于
	return {
		active:ownProps.filter === state.visibilityFilter
	}
}
const mapDispatchToProps=(dispatch,ownProps){
	return{
		onClick:()=>{
			dispatch(setVisibility(ownProps,filter))
		}
	}
}
const FilterLink = connect(
	  mapStateToProps,
	  mapDispatchToProps)(Link)