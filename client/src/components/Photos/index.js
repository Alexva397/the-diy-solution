import React, { useState } from 'react';
import paintGIF from "../../assets/videos/giphy.gif";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(10),
    },
    font: {
        fontFamily: "Inter",
        fontSize: 30,
    },
    gif: {
        marginTop: theme.spacing(5)
    }
}));

function Photos() {
    const classes = useStyles();

    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    };

    const handleSubmitFile = (e) => {
        console.log("submitting");
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource);
    };

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage);
        try {
            await fetch('/api/upload', {
                method: "post",
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-type': 'application/json' }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitFile}>
                <input
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                />
                <button className="btn" type="submit">Submit</button>
            </form>
            {previewSource && (
                <img src={previewSource} alt="chosen" style={{ height: '300px' }} />
            )}
        </div>
    )
}

export default Photos;