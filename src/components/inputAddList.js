import React from 'react';
import {connect} from "react-redux"
let inputAddList=({dispatch,todos})=>{
	debugger
    let submitText=function(e){
        e.preventDefault();
       dispatch({
 		type:"ADD_TODO",
 		id:0,   
 		text:input.value       
 	})
    }
    let input;
return(
       <form onSubmit={(e)=>submitText(e)}>
       	 <input type="text" ref={node=>input=node}/>
       	 <button type="submit">Add list text</button>
       </form>
	)


}
inputAddList=connect()(inputAddList);


export default inputAddList;
