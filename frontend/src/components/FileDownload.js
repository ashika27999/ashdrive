import React, { Component } from 'react'
import Axios from 'axios';

const downFile = require('js-file-download');

class FileDownload extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-default btn-sm" onClick =  {this.onClick}>Download</button>
            </div>
        )
    }

    onClick = () => {
        Axios.get('http://localhost:4000/api/pdf/download/'+this.props.fileID, {
            responseType: 'arraybuffer',
            headers: {
                'Accept': 'application/pdf'
             }
        }).then(response => {
            downFile(response.data, this.props.fileName);
        })
    }
}

export default FileDownload;