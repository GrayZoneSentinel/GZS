import React, { Component } from 'react';
// Dropzone to drag and drop the images to upload
import Dropzone from 'react-dropzone';
// Axios
import axios from 'axios';
// FontAwesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
// Circular progress
import CircularProgress from '@material-ui/core/CircularProgress';

class FileUpload extends Component {

    constructor() {
        super();
        this.state = {
            uploadedFiles: [],
            uploading: false
        }
         
    }

    // onDrop
    onDrop = (files) => {
        // console.log(files);
        this.setState({ uploading: true });
        
        let formData = new FormData();
        
        const config = {
            header: {'content-type' : 'multipart/form-data'}
        }

        formData.append("file", files[0]);
        
        axios.post('/api/users/uploadimage', formData, config)
        .then( response => {
            this.setState({
                uploading: false,
                uploadedFiles: [
                    ...this.state.uploadedFiles,
                    response.data
                ]
            }, () => {
                this.props.imagesHandler(this.state.uploadedFiles)
            })
        })
    } 

    // showUploadedImages
    showUploadedImages = () => {

    } 

    render(){
        return(
            <div>
                <section>
                    <div className="dropzone clear">
                        <Dropzone
                            onDrop = { (e) => this.onDrop(e) }
                            multiple = { false }
                            className = "dropzone_box" 
                        >
                            <div className="wrap">
                                <FontAwesomeIcon
                                    icon = {faPlusCircle}
                                />
                            </div>
                        </Dropzone>
                        { this.showUploadedImages() }
                        {
                            this.state.uploading
                                ?
                                    <div 
                                        className = "dropzpne_box"
                                        style = {{
                                            textAlign: 'center',
                                            paddingTop: '60px'
                                        }}
                                    >
                                        <CircularProgress
                                            style = {{ color: '#00bcd4' }}
                                            thickness = {7}
                                        />
                                    </div>
                                :
                                    null
                        }
                    </div>
                </section>
            </div>
        )
    } 
}

export default FileUpload;