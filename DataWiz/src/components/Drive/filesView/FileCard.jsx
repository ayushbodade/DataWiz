import React from 'react'
import './FileCard.css'
import {HiDocument} from 'react-icons/hi'

// import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const FileCard = ({ name }) => {
    return (
        <div className='fileCard'>
            {/* <div className="fileCard--top">
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
            </div> */}
            <HiDocument style={{ fontSize: 150}} />

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard