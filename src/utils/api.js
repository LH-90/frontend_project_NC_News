import axios from 'axios';

const ncNewsAPI = axios.create({
    baseURL: "https://backend-project-nc-news-avuk.onrender.com/api"
})

export const getArticles = (topic, sort_by, order) => {
    let params = {}

  if (topic) params.topic = topic;
  if (sort_by) params.sort_by = sort_by;
  if (order) params.order = order;


    return ncNewsAPI.get("/articles", {params})
        .then((response) => {
            return response.data;
        });
}

export const getArticleById = (article_id) => {
    return ncNewsAPI.get(`/articles/${article_id}?comment_count=${article_id}`)
    .then((response) => {
        return response.data
    })
}

export const getComments = (article_id) => {
    return ncNewsAPI.get(`/articles/${article_id}/comments`)
    .then((response) => {
        return response.data
    })
}

export const patchArticle = (article_id, vote) => {
    const updateVote = {inc_votes: vote}
    return ncNewsAPI.patch(`/articles/${article_id}`, updateVote)
    .then((response) => {
        return response.data
    })
}

export const postComment = (article_id, newComment, username) => {
    const addComment = {username: username, body: newComment}
    return ncNewsAPI.post(`/articles/${article_id}/comments`, addComment)
    .then((response) => {
        return response.data.comment
    })
}

export const deleteComment = (comment_id) => {
    return ncNewsAPI.delete(`/comments/${comment_id}`)
    .then((response) => {
        return response.data
    })
}

export const getTopics = () => {
    return ncNewsAPI.get("/topics")
    .then((response) => {
        return response.data
    })
}



