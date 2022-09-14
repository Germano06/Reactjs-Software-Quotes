import React, {Component} from "react";
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            author: "",
            quote: ""
        }
    }

    hideLabel() {
        document.getElementById("success").style.visibility = "hidden"
    }

    showLabel() {
        document.getElementById("success").style.visibility = "visible"
    }

    clearLabel() {
        document.getElementById("auth").value = ""
        document.getElementById("quote").value = ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler =e => {
    if(this.state.author === " " && this.state.quote === " "){
        document.getElementById("success").innerText = "Fields are empty"
        
    }else {
            e.preventDefault()
            axios.post('https://quote-api-app.herokuapp.com/quote/', this.state)
            .then(response => {
                this.showLabel()
                document.getElementById("success").innerText = "New Quote has been added"
                this.clearLabel()
            })
            .catch(error => {
                console.log(error)
                this.showLabel()
                document.getElementById("success").innerText = error.response.data.message
                
            })
        }
        console.log(this.state.author)
    }
    

    render() {
        const { author, quote} = this.state
        return (
            <div>
                <form>
                    <center >
                        <h2>Add New Quote</h2>
                        <div>
                            <input id="auth" type="text" name="author" value={author} label="hidden" onClick={this.hideLabel} onChange={this.changeHandler} placeholder="Author Name" style={{width:"40%",borderRadius:"10px",height:"50px",padding:"8px",border:"1px solid black"}}/>
                        </div>&nbsp; &nbsp;
                        <div>
                            <textarea id="quote" type="text" name="quote" value={quote} onClick={this.hideLabel} onChange={this.changeHandler} placeholder="Quote" style={{width:"50%",borderRadius:"10px",height:"10vh", padding:"18px",border:"1px solid black"}}/>
                        </div>&nbsp; &nbsp;
                        <div>
                            <label id="success" className="label label-success" style={{visibility:"hidden"}} ></label>
                        </div>&nbsp; &nbsp;
                        <div>
                            <button type="submit" className="btn btn-outline-success" style={{width:"80px",borderRadius:"20px"}} onClick={this.submitHandler}>Submit</button>
                        </div>
                    </center>
                </form>
            </div>
        )
    }
}
export default PostForm;