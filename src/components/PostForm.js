import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleUserChange = e => {
        this.setState({
            userId: e.target.value
        })
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleBodyChange = e => {
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings);
        const data = await res.json();
        console.log(data)
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="userId">UserId </label>
                    <input type="text" id="userId" value={userId} onChange={this.handleUserChange}/>
                </div>
                <div>
                    <label htmlFor="title">Title </label>
                    <input type="text" id="title" value={title} onChange={this.handleTitleChange}/>
                </div>
                <div>
                    <label htmlFor="body">Body </label>
                    <input type="text" id="body" value={body} onChange={this.handleBodyChange}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default PostForm
