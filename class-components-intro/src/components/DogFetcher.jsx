import React from 'react';
import UD from './Underdog'

export default class DogFetcher extends React.Component {

    constructor(props){
        super(props)
        this.state={
            url:'',
            interval:0,
            word:''
        }
        this.fetchDog=this.fetchDog.bind(this);
    }

    componentDidMount(){
        console.log('component did mount')
        this.fetchDog();
        this.setState({interval:setInterval(this.fetchDog,5000)})
    }


    componentWillUnmount(){
        console.log('df will unmount')
        clearInterval(this.state.interval);
    }

    async fetchDog(){
        const result= await fetch('https:/random.dog/woof.json')
        const jsonified=await result.json()
        this.setState({url:jsonified.url})
        console.log('dog was fetched')
    }

    render(){
        return(
            <div>
                <h1>Here is a <em>dog</em></h1>
                {/* <input value={this.state.word} onChange={e=>this.setState({word:e.target.value})} placeholder='type in here to load dogs'/> */}
                <img src={this.state.url} alt="dog picture"/>
                <UD/>
            </div>
        )
    }
}