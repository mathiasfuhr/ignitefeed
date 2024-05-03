import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      AvatarUrl: "https://github.com/mathiasfuhr.png",
      name: "Mathias Fuhr",
      role: "Web Developer ",
    },
    content: [
      { type: "paragraph", content: "E aí, pessoal! 👋" },
      {
        type: "paragraph",
        content:
          "React é uma biblioteca JavaScript de código aberto mantida pelo Facebook. Ela é amplamente utilizada para construir interfaces de usuário interativas e reativas para aplicativos web.",
      },
      {
        type: "paragraph",
        content:
          "Com sua abordagem baseada em componentes, React simplifica o desenvolvimento, permitindo que os desenvolvedores dividam a interface do usuário em pequenos componentes reutilizáveis. Isso facilita a manutenção do código e a criação de interfaces dinâmicas e responsivas.",
      },
      {
        type: "paragraph",
        content:
          "Com uma comunidade ativa e uma curva de aprendizado relativamente suave, React é uma escolha popular para o desenvolvimento front-end de aplicativos modernos.",
      },
    ],
    publishedAt: new Date("2024-05-03 10:29:00"),
  },
  {
    id: 2,
    author: {
      AvatarUrl: "https://github.com/diego3g.png",
      name: "John Doe",
      role: "Full Stack Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Olá, pessoal! Como vocês estão?",
      },
      {
        type: "paragraph",
        content:
          "Queria compartilhar com vocês sobre a minha jornada como desenvolvedor full stack.",
      },
      {
        type: "paragraph",
        content:
          "Tenho explorado diversas tecnologias tanto no front-end quanto no back-end, e tenho que dizer que é uma experiência fascinante.",
      },
      {
        type: "paragraph",
        content:
          "A capacidade de criar aplicações completas, desde a interface do usuário até o banco de dados, me dá uma sensação de realização incrível.",
      },
      {
        type: "paragraph",
        content:
          "Estou sempre buscando aprender mais e me aprimorar nas minhas habilidades. Se alguém tiver dicas ou quiser trocar experiências, estou à disposição!",
      },
    ],
    publishedAt: "2024-05-02 12:15:00",
  },
];
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
