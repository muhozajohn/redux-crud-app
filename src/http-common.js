import axios from "axios";

export default axios.create({
  baseURL: "https://issaportfolio.onrender.com/api/project",
  headers: {
    "Content-type": "application/json"
  }
});