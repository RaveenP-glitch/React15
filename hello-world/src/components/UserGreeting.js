import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {

        return this.state.isLoggedIn && <div>Welcome Raveen</div>

        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Raveen</div>:
        //     <div>Welcome Guest</div>
        // );




    //     if (this.state.isLoggedIn) {
    //         return (
    //             <div>
    //                 Welcome Raveen
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div>Welcome Guest</div>
    //         )
    //     }

    // }

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Raveen</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

     }

}

export default UserGreeting;
