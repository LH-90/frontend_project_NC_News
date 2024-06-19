import { useState } from "react"
import { postComment } from "../utils/api"

const CommentAdder = ({ article_id, setComments, error, setError}) => {
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(article_id, newComment)
        .then((newCommentFromAPI) => {
            setNewComment("")
            setComments((currentComments) => {
                return [newCommentFromAPI, ...currentComments]
            })
        })
        .catch((error) => {
            consoleLog(error)
            setError("We can't add your comment, please try again later.")
          })
    }
  
    const handleChange = (event) => {
        setNewComment(event.target.value)
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="input-username" id="username-input" name="username" defaultValue="jessjelly" readOnly></input>
            <input className="input-comment" onChange={handleChange} value={newComment} id="comment-input" name="comment" required></input> 
            <button type="submit">add</button>
        </form>
    )
}

export default CommentAdder