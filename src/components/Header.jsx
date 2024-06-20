import TopicsList from "./TopicsList"
import { useState } from "react"

const Header = () => {

    const [showTopicsList, setShowTopicsList] = useState(false)

    const handleClick = () => {
        setShowTopicsList(!showTopicsList)
    }

    return (
        <header className="header">
            <h1 className="title">NC News</h1>
            <button className="topics-button" onClick={handleClick}>Topics</button>
            {showTopicsList ? < TopicsList />: null}
        </header>
    )
}

export default Header