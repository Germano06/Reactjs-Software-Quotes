import React, {Component} from "react";
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            author: "",
            quote: "",
            likes: "",
            dislikes: ""
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler =e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://quote-api-app.herokuapp.com/quote', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { author, quote, likes, dislikes} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="author" value={author} onChange={this.changeHandler} placeholder="Author Name"/>
                    </div>
                    <div>
                        <input type="text" name="quote" value={quote} onChange={this.changeHandler} placeholder="Quote"/>
                    </div>
                    <div>
                        <input type="text" name="likes" value={likes} onChange={this.changeHandler} placeholder="Likes"/>
                    </div>
                    <div>
                        <input type="text" name="dislikes" value={dislikes} onChange={this.changeHandler} placeholder="Dislikes"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default PostForm;