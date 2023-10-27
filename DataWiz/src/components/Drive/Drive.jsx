import React, { useState } from "react";
import DriveHeader from "./Header/DriveHeader";
import NewFile from "./Upload/NewFile";
import FilesView from "./filesView/FilesView";

const Drive = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div>
        <DriveHeader />
        <NewFile />
        <FilesView />
        <button style={{background : 'black',margin : '10px'}} onClick={logout}>Logout</button>
      </div>
    </>
  );
};

export default Drive;
