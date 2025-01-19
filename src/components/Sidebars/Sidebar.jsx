import styles from "./Sidebar.module.css"
import ImagComp from "../../assets/images.jpg"
import { PencilLine} from "@phosphor-icons/react"
import { Avatar } from "../AvatarComp/Avatar"

export const Sidebar= () =>{
    return(
            <aside className={styles.sidebar}>
                <img src={ImagComp} className={styles.cover} />

                <div className={styles.profile}>
                    <Avatar src="https://github.com/jhonatann-per.png" />

                    <strong>Diego Fernandes</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar Perfil</a>
                </footer>
            </aside>
      
    )
}