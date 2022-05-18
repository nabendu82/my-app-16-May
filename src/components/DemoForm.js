import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            comment: '',
            language: 'angular'
        }
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleLangChange = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        const { email, comment, language } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" id="email" value={email} onChange={this.handleEmailChange}/>
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" value={comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={language} onChange={this.handleLangChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default DemoForm
