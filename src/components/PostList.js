import React, { Component } from 'react'
import ListItem from './ListItem';

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            posts: data
        })
    }

    render() {
        return this.state.posts.map(post => <ListItem key={post.id} post={post} />)
    }
}

export default PostList
