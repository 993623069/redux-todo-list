import React from 'react';
import {connect} from "react-redux"
let inputAddList=({dispatch})=>{
    let submitText=function(e){
        e.preventDefault();
       dispatch({
 		type:"ADD_TODO",
 		id:0,   
 		text:"text1"            
 	})
    }
return(
       <form onSubmit={(e)=>submitText(e)}>
       	 <input type="text"/>
       	 <button type="submit">Add list text</button>
       </form>
	)


}
inputAddList=connect()(inputAddList);


export default inputAddList;
