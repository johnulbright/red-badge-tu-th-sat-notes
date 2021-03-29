import React from 'react';

interface ReverserProps{
}

interface ReverserState{
    str:string
    reversedStr:string

}

export default class Reverser extends React.Component<ReverserProps, ReverserState>{
    constructor(props:ReverserProps){
        super(props);
        this.state={
            str:'',
            reversedStr:''
        }
    }
    reverseString(e):void{
        this.setState({str:e.target.value});
        this.setState({reversedStr:this.state.str.split('').reverse().join('')});
    }
    render(){
        return(
            <div>
              <h2>This is a string reverser</h2>
              <p>{this.state.reversedStr}</p>
              <input value={this.state.str} onChange={(e)=>{
                  this.reverseString(e)
                }}/>
            </div>
        )
    }
}