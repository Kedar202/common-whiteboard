import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const GoogleDocModal = (props) => {
    let file = "";
    // const [name, setName] = useState("")
    // const [folderId, setFolderId] = useState("")
    // var accessToken = "ya29.a0AfH6SMD4OQfaDNGTBrezfAJaG0ZNNdwvesJJcBYgRLjz5D8Aastk_is5-DWDmzGh5Pb_KvYQz0Z1r_LWIATTDlx6L3GysvF80nyf301DXOawXk87nlyeX8LNfV-C4LBhsLhSixPdU1D50S4C1TXeNOXUPs2ojKtISHtcMB_bgPs";
    // var refreshToken = "1//04zkawuuVV-ucCgYIARAAGAQSNwF-L9Ir4P6TYvpO1ddvApr2pKCqohIc70ywH0J6aFKFhMxBcBWUwxpt-q5kVM_TQFJhGJXquKE"

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     var folderName = 'KedarFolder';
    
    //     if (file) {
    //         createFolder(folderName);
    
    //     //   var fileContent = 'sample text'; // As a sample, upload a text file.
    //     //   var myfile = new Blob([fileContent], { type: 'text/plain' });
         
    
    //     }
    
    // }

    // const createFolder = (folderName) => {
    //     // meta data to create a folder...
    //     if (!folderName) {
    //       return null
    //     } else {
    //       var folder_meta_data = {
    //         mimeType: 'application/vnd.google-apps.folder',
    //         title: 'Folder',
    //         name: folderName
    //       }
    
    //       var form = new FormData();
    //       form.append('folder_meta_data', new Blob([JSON.stringify(folder_meta_data)], { type: 'application/json' }));
    
    
    //       var fxhr = new XMLHttpRequest();
    //       fxhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id');
    //       fxhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    //       // fxhr.setRequestHeader('Authorization', 'Bearer ' + refreshToken);
    //       fxhr.responseType = 'json';
    //       fxhr.onload = () => {
    //         console.log({ folderId: fxhr.response.id });
    //         setFolderId(fxhr.response.id)

    //         var metadata = {
    //           'name': file.name, // Filename at Google Drive
    //           'mimeType': file.type, // mimeType at Google Drive
    //           //'parents': ['1k-hcbEWiVH5z-Jy5sK7fg_VBwpsJcTzV'], // Folder ID at Google Drive
    //           'parents': [fxhr.response.id], // Folder ID at Google Drive
    //         };
      
    //         var form = new FormData();
    //         form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    //         form.append('file', file);
      
    //         var xhr = new XMLHttpRequest();
    //         xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id');
    //         xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    //         xhr.setRequestHeader('Authorization', 'Bearer ' + refreshToken);
    //         xhr.responseType = 'json';
    //         xhr.onload = () => {
    //           console.log(xhr.response.id); // Retrieve uploaded file ID.
    //         };
    //         xhr.send(form);
    //       };
    //       fxhr.send(form);
    //     }
    
    //   }

    // const fileHandler = (e) => {
    //     file = e.target.files[0];
    // }

    
    const fileHandler = (e) => {

      file = e.target.files[0]
      console.log(file);
    }

    const submitHandler = (e) => {

      e.preventDefault();

      const formdata = new FormData();
      if (file) {
        formdata.append('file', file);
        const { data } = Axios.post("/api/googledrive/upload", formdata, {
          headers: {
            'Content-Type': 'Multipart/form-data'
          }
        });

        if (data) {
          console.log(data);
        }
      }

    }
    return (<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton className="px-0 py-1 border-0 d-flex justify-content-center align-items-center">
            <span className="mr-2 p">You're in presenter mode. For multiple participants collaboration click here</span>
            <button type="button" className="btn btn-primary">Allow collaboration</button>
            <link rel="stylesheet" type="text/css" media="screen" href="css/upload.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="upload.js"></script>
        </Modal.Header>
        <Modal.Body>
        <div>

          <h1>Google Drive API's</h1>

          <form onSubmit={submitHandler}>
            <input type="file" onChange={(e) => fileHandler(e)} />
            <input type="submit" />
          </form>

          </div>
        <div id="result">
        </div>
    
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>)
}

export default GoogleDocModal