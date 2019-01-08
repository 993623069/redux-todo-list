import React from "react";
const Link=({ active , children , onClick}) => {
	if(active){
		return <span>{children}</span>
	}
	return (
         <a href="#" onClick={e=>{
         	e.preventDefault();
         	onClick()
         }}></a>
		)
}
export default Link;
//那么显示组件我们为什么要在上面一层逻辑组件哪
//就是为了得到显示组件所需要的props