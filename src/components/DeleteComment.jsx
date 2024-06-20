import { deleteComment } from "../utils/api";
import { useState } from "react";

const DeleteComment = ({comment, comments, setComments, setArticle}) => {

  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [error, setError] = useState(null)

  const handleShowModal = (comment_id) => {
    setCommentToDelete(comment_id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCommentToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (commentToDelete) {
      deleteComment(commentToDelete)
        .then(() => {
          const newCommentsList = comments.filter((comment) => comment.comment_id !== commentToDelete);
          setComments(newCommentsList);
          setArticle((currentArticle) => ({
            ...currentArticle,
            comment_count: currentArticle.comment_count - 1,
          }));
          handleCloseModal();
        })
        .catch((error) => {
          console.error(error);
          setError("We can't delete your comment, please try again later.");
          handleCloseModal();
        });
    }
  };

  if (error) {
    return <p>{error}</p>
}

    return (
        <section>
            <button onClick={() => handleShowModal(comment.comment_id)}>delete</button>
            {showModal ? (
                <div className="modal-background">
                  <div className="modal">
                      <p>Are you sure you want to delete this comment?</p>
                      <div className="button-container">
              <button className="button-cancel" onClick={handleCloseModal}>Cancel</button>
              <button className="button-delete" onClick={handleConfirmDelete}>Delete</button>
            </div></div>
                </div>
              ): null}

        </section>
    )
}

export default DeleteComment
