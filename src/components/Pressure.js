import React, { Component } from 'react';
import axios from 'axios';

class Pressure extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    

    componentDidMount(){
        axios.get('https://api.particle.io/v1/devices/3a0033001747373335333438/Pressure(PSI)?access_token=01f0224143a1b26882892785977f193e1b309e27')
        
        .then(response => {
            console.log(response)
            this.setState({posts: [response.data]})
        })
        .catch(error => {
            console.log(error)
        }
        )
    }

    render() {
        const { posts } = this.state
        return (
            <div className="contentStyle">
                {
                    posts.length ?
                    posts.map(post => <div key={post.coreInfo.deviceID}>Pressure: {post.result|0} PSI</div>) :
                    null
                }
            </div>
        )
    }
}

export default Pressure;