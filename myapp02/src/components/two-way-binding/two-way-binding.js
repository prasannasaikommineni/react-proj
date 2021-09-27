import { useState} from 'react'
const TwoWayBinding =()=>{
    let [inputValue, setinputvalue] = useState('');

    return <div>
        <input value={inputValue} onChange={(event)=>{
        setinputvalue(event.target.value);
    }}></input>
        <span>{inputValue}</span>
    </div>

}

export default TwoWayBinding;