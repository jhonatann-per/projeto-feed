import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "../AvatarComp/Avatar"
import { useState } from "react"

export const Comment = ({content, onDeleteComment}) => {
    
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(e) {
        e.preventDefault()
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/jhonatann-per.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jhonatan Santos</strong>
                            <time 
                                title="18 de Janeiro ás 18:27h" 
                                dateTime="2025-01-18 18:26:00" > {" "}Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário.">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}