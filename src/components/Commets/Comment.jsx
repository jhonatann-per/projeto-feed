import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "../AvatarComp/Avatar"

export const Comment = () => {
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

                        <button title="Deletar comentário.">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        Muito bom Jhon!
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}