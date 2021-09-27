import react , {Component} from 'react';
import MyProps from '../myprops/myprops';

export class Myclass extends Component{
    render(     
    ){
        return <div>view: es6
            <MyProps name='hell' add='aser'/>
        </div>;
    }
}

export default Myclass;