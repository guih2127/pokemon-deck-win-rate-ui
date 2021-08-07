import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:44352",
    headers: {
        "Content-type": "application/json"
    }
});