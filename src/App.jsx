import "./global.css";
import styles from "./App.module.css"
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebars/Sidebar";
import { Post } from "./components/Posts/Post";

const posts = [
  {
    id: 1,
    author: {
        avatarUrl: "https://github.com/jhonatann-per.png",
        name: "Jhonatan Santos",
        role: "Dev Front-End"
      },
    content: [
      { type:"paragraph", content: "Fala galeraa 👋" },
      { type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      {type:"link", content: "👉 jhon.developer/front-end"}
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
        avatarUrl: "https://github.com/airamez.png",
        name: "airamez Santos",
        role: "Dev Full-Stack"
      },
    content: [
      { type:"paragraph", content: "Fala galeraa 👋" },
      { type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      {type:"link", content: "👉 Airamez.developer/Full-Stack"}
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
];


export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post =>{
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </div>
  )
  
}

