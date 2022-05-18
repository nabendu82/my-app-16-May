import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.emailRef = React.createRef()
        this.commentRef = React.createRef()
    }

    componentDidMount(){
        this.emailRef.current.focus()
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.emailRef.current.value)
        console.log(this.commentRef.current.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" id="email" ref={this.emailRef} />
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" ref={this.commentRef}></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default RefsDemo
