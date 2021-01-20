import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3f79e-default-rtdb.firebaseio.com/'
});

export default instance;