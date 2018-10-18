import React, { Component } from "react";

class SitterProfile extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <p>{this.props.location.state.name}</p>
            
            </div>



        )

    }




}

export default SitterProfile;