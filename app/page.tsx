import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="my-0 mx-auto overflow-hidden w-screen max-w-screen-xl">
      <Header />
      <main>Content</main>
      <footer>footer</footer>
    </div>
  );
}
