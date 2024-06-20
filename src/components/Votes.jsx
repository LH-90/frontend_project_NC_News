import { useState, useEffect } from "react";
import { patchArticle } from "../utils/api";

const Votes = ({article_id, article, setArticle, error, setError}) => {
    const [voted, setVoted] = useState(false);
    const [voteType, setVoteType] = useState(null);

    useEffect(() => {
      const savedVote = localStorage.getItem(`vote_${article_id}`); // Store the vote, so the same user can't vote again when leaving and comming back to an article
      if (savedVote) {
        setVoted(true);
        setVoteType(parseInt(savedVote));
      }
    }, [article_id]);

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
              localStorage.setItem(`vote_${article_id}`, vote);
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
              localStorage.removeItem(`vote_${article_id}`);
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
      return error
    }
  

    return (
      <section>
        <div className="votes-comments">
            <button onClick={handleDecreaseVote} disabled={voted && voteType === 1}>↓</button>
            <p>{article.votes}</p>
            <button onClick={handleIncreaseVote} disabled={voted && voteType === -1}>↑</button>
        </div>
      </section>
    )

}

export default Votes