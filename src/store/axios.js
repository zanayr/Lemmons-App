import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lemmons-app.firebaseio.com/'
});

export default instance;