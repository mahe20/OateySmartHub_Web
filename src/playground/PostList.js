import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    

    componentDidMount(){
        axios.get('https://api.particle.io/v1/devices/340039000a47373336323230/Temperature(F)?access_token=01f0224143a1b26882892785977f193e1b309e27')
        //axios.get('https://jsonplaceholder.typicode.com/posts')
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
            <div>
                Temp
                {
                    posts.length ?
                    posts.map(post => <div key={post.coreInfo.deviceID}> {post.result} </div>) :
                    null
                }
            </div>
        )
    }
}


export default PostList