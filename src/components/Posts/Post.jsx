import styles from "./Post.module.css"
import { Comment } from "../Commets/Comment"
import { Avatar } from "../AvatarComp/Avatar"
export const Post = () => {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/jhonatann-per.png" />
                    <div className={styles.authorInfo} >
                        <strong>Jhonatan Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    title="18 de Janeiro ás 18:27h" 
                    dateTime="2025-01-18 18:26:00" >Publicado há 1h
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que 
                    fiz no NLW Return, evento da Rocketseat. O nome do projeto é 
                    DoctorCare 🚀
                </p>
                <p>👉 <a href=""> jhon.developer/front-end</a> </p>
                <p> 
                    <a href="" > #novoprojeto </a>{" "} 
                    <a href="" > #nlw </a>{" "} 
                    <a href="" > #rocketseat </a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder="Deixe Seu comentário!"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}