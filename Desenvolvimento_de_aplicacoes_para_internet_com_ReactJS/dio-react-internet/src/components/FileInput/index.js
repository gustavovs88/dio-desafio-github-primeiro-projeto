import React from "react";

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        alert(`Arquivo enviado: ${this.fileInput.current.files[0].name}`)
        e.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome do arquivo:
                    <input type='file' ref={this.fileInput}/>
                </label>
                <button type="submit">Submit</button>
            </form>


        )
    }
}

export default FileInput