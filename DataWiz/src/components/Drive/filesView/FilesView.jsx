import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import FileItem from "./FileItem";
import FileCard from "./FileCard";
import "./FilesView.css";
import { collection,getDocs } from "firebase/firestore";
// import { doc, getDoc } from "firebase/firestore";
// import { getDownloadURL } from "firebase/storage";
// import { ref, listAll } from "firebase/storage";

const FilesView = () => {
  const [files, setFiles] = useState([]);

    const getData = async() => {
    const docSnap = await getDocs(collection(db,"myFiles/"))
    docSnap.forEach((doc) => {
      setFiles((prev) => [...prev,doc])
    })
    }
  useEffect(() => {
    getData()  
  },[])

  // const fetchFromStorageRef = ref(storage, "files/");
  // useEffect(() => {
  //   listAll(fetchFromStorageRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         console.log(files);
  //         setFiles((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   listAll(collection(db,'myFiles').onSnapshot(snapshot => {
  //     console.log(snapshot)
  //     setFiles(snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       item: doc.data()
  //     })))
  //   }))
  // },[])

  return (
    <div className="fileView">
      <div className="fileView__row">
      {/* {console.log(files)} */}
      {/* {console.log(files[0]?._document.data.value.mapValue.fields.caption.stringValue)} */}
        {files?.slice(0, 5).map(({ item }, i) => (
          <FileCard key={i} name={item?._document.data.value.mapValue.fields.caption.stringValue} />
        ))}
      </div>
      <div className="filesView__titles">
        <div className="filesView__titles--left">
          <p>Name</p>
        </div>
        <div className="filesView__titles--right">
          <p>Last modified</p>
          <p>Files size</p>
        </div>
      </div>
      {files.map((item, i) => (
        <FileItem key={i} timestamp={item.data().timestamp} caption={item.data().caption} size={item.data().size} fileUrl={item.data().fileUrl} />
      ))}
    </div>
  );
};

export default FilesView;
