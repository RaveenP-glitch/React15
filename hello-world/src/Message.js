import React, { Component } from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            count:true,
            message:'Welcome visitor'
        }

    }

    changeMessage(){
        var condi =  this.state.count? false: true;
        this.setState({
            count : condi,
            message: this.state.count? 'Thank you for subscribing' : 'Welcome visitor' 
        
        })

    }

    render() {
        return (
                <div>
                 <h1>{this.state.message}</h1>
                 <button onClick={() => this.changeMessage()}>Subscribe</button>
                 </div>
        )
    }
}

export default Message