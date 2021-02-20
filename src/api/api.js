import axios from "axios";

//Для иммитации данных решил использовать fakeApi от jsonplaceholder
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET',
    }
})

export const CommentsApi = {
    getComments(currentPage, pageSize) {
        return instance.get(`comments?_page=${currentPage}&_limit=${pageSize}`).then(res => res.data)
    }
}