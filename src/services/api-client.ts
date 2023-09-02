import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '61379a3c28ca4c61bb7baf6a95ffd661'
    }
})