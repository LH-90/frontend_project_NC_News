import { useState } from "react";
import { patchArticle } from "../utils/api";

const Votes = ({article_id, article, setArticle, error, setError}) => {
    const [voted, setVoted] = useState(false);
    const [voteType, setVoteType] = useState(null);

    const handleVote = (vote) => {

        if (!voted) {
          patchArticle(article_id, vote)
            .then(() => {
              setArticle((currentArticle) => ({
                ...currentArticle,
                votes: currentArticle.votes + vote,
              }));
              setVoted(true)
              setVoteType(vote)
            })
            .catch((error) => {
              setError("We can't update the vote, please try again later.")
            })
    
        } else {
          patchArticle(article_id, -vote)
            .then(() => {
              setArticle((currentArticle) => ({
                ...currentArticle,
                votes: currentArticle.votes - vote,
              }))
              setVoted(false);
            })
            .catch((error) => {
              setError("We can't cancel the vote, please try again later.")
            })
        }
      }
    
    const handleIncreaseVote = () => {
        handleVote(1)
    };
    
    const handleDecreaseVote = () => {
        handleVote(-1)
    };

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="votes-comments">
            <button onClick={handleDecreaseVote} disabled={voted && voteType === 1}>↓</button>
            <p>{article.votes}</p>
            <button onClick={handleIncreaseVote} disabled={voted && voteType === -1}>↑</button>
        </div>
    )

}

export default Votes