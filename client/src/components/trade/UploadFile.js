import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function UploadFile() {
    const [file, setFile] = useState(null);
    const [photo, setPhoto] = useState(null);

    const fileTypes = ["image/jpeg", "image/png"];

    function validFileType(file) {
        return fileTypes.includes(file.type);
    }

    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        } else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        } else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }

    useEffect(() => {
        console.log(file);
        if (file) {
            if (validFileType(file)) {
                setPhoto(() => (
                    <p>
                        {returnFileSize(file.size)}
                        <img
                            style={{ width: "100px" }}
                            src={URL.createObjectURL(file)}
                        />
                    </p>
                ));
            } else {
                setPhoto(() => <p>Invalid file type.</p>);
            }
        }
    }, [file]);

    const handleChange = (e) => {
        console.log("aisdiadjs");
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(file);
        if (file) {
            const res = await fetch("/api/aws", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
                },
                body: JSON.stringify({ fileName: file.name }),
            });
            const { url } = await res.json();

            console.log(url);

            const postImage = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/octet-stream",
                },
                body: file,
            });

            // const resultPostImage = await postImage.text();
            // console.log(resultPostImage);
        }
    };

    return (
        <div>
            <form
                method='post'
                encType='multipart/form-data'
                onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='image_uploads'>
                        Choose images to upload (PNG, JPG)
                    </label>
                    <input
                        type='file'
                        id='image_uploads'
                        name='image_uploads'
                        accept='.jpg, .jpeg, .png'
                        onChange={handleChange}
                    />
                </div>
                <div>{photo}</div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}
