import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="my-0 mx-auto overflow-hidden w-screen max-w-screen-[1440px]">
      <Header />
      <main>
        <section id="hero" className="hero">
          <div className="flex flex-col justify-center items-center gap-3 w-[clamp(300px, 100vw, 426px)] h-auto py-[60px] px-0 text-center">
            <p className="caption">Merry Christmas</p>
            <h1>
              Gift yourself <br /> the magic of new <br /> possibilities
            </h1>
            <a href="" className="action btn"></a>
            <p className="caption">and Happy New Year</p>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
