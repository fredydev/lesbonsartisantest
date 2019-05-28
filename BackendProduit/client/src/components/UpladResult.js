import React from "react";
import { Link } from "react-router-dom";

class UploadResult extends React.Component {
    componentDidMount(){
        fetch("fileupload")
        .then(res=>console.log(res))
    }
    render(){
       return(
            <div className="result">
                <h2>filee uploaded successfuly</h2>
                <Link to="/">Back</Link>
            </div>
        ); 
    }
    
}

export default UploadResult;