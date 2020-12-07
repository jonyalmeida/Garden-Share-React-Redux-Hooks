import Cookies from "js-cookie";

export async function uploadImage(file, userId) {
    const res = await fetch("/api/aws", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        },
        body: JSON.stringify({ fileName: file.name, userId: userId }),
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

    const resultPostImage = await postImage.text();

    if (!resultPostImage) {
    }
}

export function returnFileSize(number) {
    if (number < 1024) {
        return number + "bytes";
    } else if (number >= 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + "KB";
    } else if (number >= 1048576) {
        return (number / 1048576).toFixed(1) + "MB";
    }
}
