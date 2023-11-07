import React, { useEffect, useState } from "react";
// import AddIcon from "@material-ui/icons/Add";
import "./NewFile.css";
// import firebase from '../../../firebase'
import { storage, db } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
// import { makeStyles } from "@material-ui/core/styles";
import Modal from "@mui/material/Modal";
import * as firebase from "firebase/app";
import { addDoc, collection } from "firebase/firestore";
// import { FieldValue } from '@google-cloud/firestore'
import { serverTimestamp } from "@firebase/firestore";
import axios from "axios";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: "absolute",
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

const NewFile = () => {
  // const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
    // const fileReader = new FileReader();
    // fileReader.onload = (event) => {
    //   setFile(event.target.result);
    // };
    // fileReader.readAsDataURL(e.target.files[0]);
  };

  //   const fetchFromStorageRef = ref(storage, "files/");
  //   useEffect(() => {
  //     listAll(fetchFromStorageRef).then((response) => {
  //       console.log(response);
  //     });
  //   }, []);

  const handleUpload = (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("https://data-wiz-server.vercel.app/user/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));

    //Sending file to server

    //Uploading file to firebase
    const storageRef = ref(storage, `files/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot);

      getDownloadURL(storageRef).then((url) => {
        addDoc(collection(db, "myFiles"), {
          timestamp: serverTimestamp(),
          caption: file.name,
          fileUrl: url,
          size: snapshot.metadata.size,
        });
      });
    });

    setUploading(false);
    setOpen(false);
    setFile(null);
  };

  return (
    <div className="newFile">
      <div className="newFile__container" onClick={handleOpen}>
        {/* <AddIcon /> */}
        <p>New</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <form
          style={modalStyle}
          className="form_class"
          onSubmit={handleUpload}
        >
          <p>Select files you want to upload!</p>
          {uploading ? (
            <p>Uploading...</p>
          ) : (
            <>
              <input name="file" type="file" onChange={handleChange} />
              <button type="submit" style = {{background : 'black' , marginTop:'5px', }}>Upload</button>
            </>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default NewFile;
