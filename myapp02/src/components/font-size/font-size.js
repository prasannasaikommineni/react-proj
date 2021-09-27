import { useState } from "react";

let FontSize = (props) => {
    let [a,seta] = useState(10)
    return <div>
         <button onClick={()=>seta(a++)}> Font-Increment</button>
         <button onClick={()=>seta(a--)}> Font-Decrement</button>
       
        <div style={{fontSize:a+'px'}}>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScrip</div></div>
}
export default FontSize;