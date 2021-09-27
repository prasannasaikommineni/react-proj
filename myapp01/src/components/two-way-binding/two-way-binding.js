import React ,{Component} from 'react'
class TwoWayBinding extends Component{
 constructor(props){
    super(props);
     this.state = {a:null};
    //  this.handleChange = this.handleChange.bind(this);
    }
     handleChange =(event)=>{
        this.setState({a:event.target.value});
    }
    render(){
  
    return <div>
        <input type='text' value={this.state.a} onChange={this.handleChange}></input>
        <span>{this.state.a}</span>
    </div>

}
}
export default TwoWayBinding