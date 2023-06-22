import Header from "@/components/header";

export default async function Home() {
  return (
    <>
      <Header />

      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("/images/vectorverse.png")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to VectorVerse</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p className="">
            Copyright © 2023
            <a
              className="text-blue-500 hover:text-red-500"
              href="https://github.com/vectornauts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="inline h-auto max-h-8 mx-2 rounded"
                src="/images/vectornauts.png"
              />
              Vectornauts
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
