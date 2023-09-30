import React from 'react';
import { useDropzone } from 'react-dropzone';

const Sidebar = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    return (
        <div className='sidebar'>
            <h2>Chat with your pdf</h2>
            <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag & drop a PDF file here</p>
            </div>
            {acceptedFiles.length > 0 && (
                <div>
                    <h3>Selected Files:</h3>
                    <ul>
                        {acceptedFiles.map(file => (
                            <li key={file.name}>{file.name} - {file.size} bytes</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
