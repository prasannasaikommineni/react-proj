import ParentComponent from "../../parent/parent";
import React from 'react'
// outer -->   p (head - X) --> ch-a (X) --> ch-b --> ch-c
export const UserContext = React.createContext();
export const CompanyContext = React.createContext() ;


function Outer02() {  
  return (  
    <div className="outer"> 
    <UserContext.Provider value={{"name": "Ajay Kumar", "addr": "Delhi"}} >
      <CompanyContext.Provider value={ "HUL"}>
        <ParentComponent/>
      </CompanyContext.Provider>
    </UserContext.Provider> 
       
    </div>  
  );  
}  
  
export default Outer02;  