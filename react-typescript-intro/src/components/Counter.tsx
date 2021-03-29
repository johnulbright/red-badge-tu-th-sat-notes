import React from 'react';


// GENERICS 
// use angle brackets to specify type parameters
// let arr: Array<number | string> = [0,1,2];

interface CounterProps{
    prop1:number
}

interface CounterState{
    count:number
}

export default class Counter extends React.Component<CounterProps, CounterState>{
    constructor(props:CounterProps){
        super(props);
        this.state={
            count:props.prop1
        }
    }
    render(){
        return(
            <div>
              <h2>This is a counter</h2>
              <p>{this.state.count}</p>
              <button onClick={()=>this.setState({count:this.state.count+1})}>click to increment</button>
            </div>
        )
    }
}