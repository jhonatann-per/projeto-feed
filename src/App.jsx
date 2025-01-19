import "./global.css";
import styles from "./App.module.css"
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebars/Sidebar";
import { Post } from "./components/Posts/Post";


export const App = () => {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Jhonatan Santos" 
            content="Iniciando em programçaõ front end avançada" 
          />
          <Post 
            author="Raiana Linda" 
            content="Estilista Iniciante" 
          />
        </main>
      </div>
    </div>
  )
  
}

