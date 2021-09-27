import {UserContext} from '../Outer/outer';
  
function ChildC() {  
    return (  
        <div>  
            Child Component at level 3  
            <UserContext.Consumer>  
                {  
                    myuser => {  
                        return <div><em>Child-C: ctx value: {myuser.name}</em></div>  
                    }  
                }  
            </UserContext.Consumer> 
        </div>  
    )  
}  
  
export default ChildC  ;