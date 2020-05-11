import React, { Component } from 'react'
import Axios from 'axios';

class FileDelete extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-default btn-sm" onClick =  {this.onClick}>Delete</button>
            </div>
        )
    }

    onClick = () => {
        Axios.delete('http://localhost:4000/api/pdf/delete/'+this.props.fileID);
    }
}

export default FileDelete;
