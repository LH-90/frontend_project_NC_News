import axios from 'axios';

const ncNewsAPI = axios.create({
    baseURL: "https://backend-project-nc-news-avuk.onrender.com/api"
})

export const getArticles = () => {
    return ncNewsAPI.get("/articles")
    .then((response) => {
        return response.data
    })
}

export const getArticleById = (article_id) => {
    return ncNewsAPI.get(`/articles/${article_id}`)
    .then((response) => {
        return response.data
    })
}
