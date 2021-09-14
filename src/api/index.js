import axios from 'axios';

// root endpoint
// const url = "https://url-trim.herokuapp.com";
// const url = "http://localhost:3100";
// create an API instance to make calls to the base url
const API = axios.create({ baseURL: "https://url-trim.herokuapp.com" });
// const API = axios.create({ baseURL: "http://localhost:3100" });

// fetch short url from database and redirect to the main url
// export default getUrl = () => axios.get(url+"/:url");


// create short url
// export const createUrl = (newUrl) => axios.post(`${url}/add-url`, newUrl);
export const createUrl = async (newUrl) => API.post(`/add-url`, newUrl);