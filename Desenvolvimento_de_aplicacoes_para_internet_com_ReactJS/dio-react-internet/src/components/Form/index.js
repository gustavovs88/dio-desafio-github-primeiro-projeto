import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        alert(`Your form has been submited:\nname: ${this.state.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type='text' onChange={this.handleChange}></input>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default Form
