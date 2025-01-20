import styles from "./Post.module.css";
import { Comment } from "../Commets/Comment";
import { Avatar } from "../AvatarComp/Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR"
import { useState } from "react";

// Estados = variáveis que eu quero que o componente monitore

export const Post = ({ author, publishedAt, content }) => {
    const [comments , setComments] = useState([
        'Show parabéns!'

    ])

    const [newCommentText, setNewCommentText] = useState("")

    const publishedDataFormatted = format(
        publishedAt,
        "d 'de' LLLL 'ás' HH:mm'h'",
        {locale: ptBr}
    );

    const publishedDateRelativToNow = formatDistanceToNow(publishedAt,
        { 
            locale: ptBr,
            addSuffix: true
        }
    )


    function handleCreateNewComment(e) {
        e.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText("");
    }

    
    function handleNewCommentChange(e) {
        setNewCommentText(e.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentWithoutDeletedOne);

    }
    // Author: {avatar_url: "", name: "", profissão: ""}
    // PublishedAt: Date
    // Content: String


    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo} >
                        <strong >{author.name}</strong>
                        <span >{author.role}</span>
                    </div>
                </div>

                <time title={publishedDataFormatted} dateTime={publishedAt.toISOString()} >
                    {publishedDateRelativToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                        if(line.type === 'paragraph') {
                            return <p key={line.content} >{line.content}</p>
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href="#" >{line.content}</a></p>
                        }
                    })
                }
                <p> 
                    <a href="" > #novoprojeto </a>{" "} 
                    <a href="" > #nlw </a>{" "} 
                    <a href="" > #rocketseat </a>
                </p>
            </div>

            <form 
                onSubmit={handleCreateNewComment} 
                className={styles.commentForm}>

                <strong>Deixe seu Feedback</strong>
                <textarea 
                    name="comment"
                    placeholder="Deixe Seu comentário!"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer >
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) =>{
                    return (
                    <Comment 
                        content={comment}  
                        key={index}
                        onDeleteComment={deleteComment}
                    />
                )})}

            </div>
        </article>
    )
}