import React from 'react';

class Main extends React.Component {
    
    render(){
        return (
            <div >
            <h3>File Uploader</h3>
            <form action="/fileupload" className="upload-form" encType="multipart/form-data" method="POST">
                <div className="form-group">
                    <label>Televerser un fichier</label>
                    <input  name="file" type="file" />
                </div>
                <button>Envoyer</button>
            </form>
            </div>
        );
    };
  
}

export default Main;
