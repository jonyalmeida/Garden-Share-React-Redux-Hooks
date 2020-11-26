import Cookies from "js-cookie";

export async function fetchMessages(userId) {
    const response = await fetch("/api/users/messages", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        },
        body: JSON.stringify({ userId: userId }),
    });
    const messages = await response.json();
}
