// Filename - App.js

import axios from "axios";

import React, { Component } from "react";

class App extends Component {
    state = {

        selectedFile: null,
    };


    onFileChange = (event) => {

        this.setState({
            selectedFile: event.target.files[0],
        });
    };


    onFileUpload = () => {

        const formData = new FormData();


        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );


        console.log(this.state.selectedFile);

        axios.post("/", formData);//API URL pettu ikkada
    };

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>
                        File Name:{" "}
                        {this.state.selectedFile.name}
                    </p>

                    <p>
                        File Type:{" "}
                        {this.state.selectedFile.type}
                    </p>

                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <p>upload the file to extract the info</p>
                </div>
            );
        }
    };

    render() {
        return (
            <div style={{marginLeft:"30%"}}>
                <h1>the NIRF info extractor</h1>
                <div >
                    <input
                        type="file"
                        onChange={this.onFileChange}
                    />
                    <button onClick={this.onFileUpload}>
                        Upload pdf
                    </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}
// 
export default App;
