const Todo=({onClick,completed,text})=>(
           <li 
               onClick={onClick}
               style={{textDecoration:completed?"line-through":"none"}}></li>
	)