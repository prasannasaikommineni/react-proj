import React from 'react';
import ChildB from '../childB/childB';
  
function ChildA() {  
    return (  
        <div>           
            Child Component at level 1  
            <ChildB/>
        </div>  
    )  
}  
  
export default ChildA