
let  MyContainerComm = ()=><Intermediate mytext="What is react??" />; 
let  Intermediate =(props)=> <Child mytext={props.mytext} />;
let  Child = (props)=><span>{props.mytext}</span>;

export default MyContainerComm ;