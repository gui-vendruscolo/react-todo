import axios from "axios";
import { environments } from "../environment";

const api = axios.create({
    baseURL: environments.development.baseUrl,
});

export default api;
