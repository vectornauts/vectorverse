export default async function Home() {
  return (
    <section>
      <div className="hero bg-base-200 w-100 pb-6">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/vectorverse.png"
            className="object-contain h-46 w-1/2 max-w-md rounded-lg shadow-2xl mx-3 mt-5"
          />
          <div className="p-7">
            <h1 className="text-5xl font-bold">Welcome to VectorVerse</h1>
            <p className="py-6 prose">
              We are reimagining the way you explore, understand, and think
              about your embeddings. Our cutting-edge approach, grounded in
              network geometry, will streamline your process of categorization
              and metadata assignment.
            </p>
            <a href="/login"><button className="btn btn-primary">Get Started</button></a>
          </div>
        </div>
      </div>

      <div className="hero bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="h2 pt-8 m-4 md:w-2/3">
            <div className="carousel">
              <div id="item1" className="carousel-item w-full">
                <div>
                  <img
                    src="/images/sentbert_600x600.png"
                    className="w-full rounded"
                  />
                  <h1 className="py-3 font-bold text-center text-3xl">
                    SentBERT
                  </h1>
                </div>
              </div>

              <div id="item2" className="carousel-item w-full">
                <div>
                  <img
                    src="/images/openai_600x600.png"
                    className="w-full rounded"
                  />
                  <h1 className="py-3 font-bold text-center text-3xl">
                    OpenAI
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
            </div>
          </div>

          <div className="p-7 rounded">
            <h1 className="text-5xl font-bold">
              You haven&apos;t seen your vectors like this before
            </h1>
            <p className="py-6 prose">
              Time to open the &quot;black box&quot; and start making sense of
              your LLMs.
            </p>
            <a href="/login"><button className="btn btn-primary">Get Started</button></a>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-4 text-base-content text-small">
        <div>
          <div className="mb-3">
            Powered By
            <div className="grid grid-flow-col gap-5 mt-2">
              <a className="link" target="_blank" href="https://www.github.com/"><img className="w-10" src="/images/github.svg"></img></a>
              <a className="link" target="_blank" href="https://wwww.vercel.com/"><img className="w-10" src="/images/logo-vercel-svgrepo-com.svg"></img></a>
              <a className="link" target="_blank" href="https://www.pinecone.io/"><img className="w-10" src="/images/pinecone-icon-seeklogo.com.svg"></img></a>
              <a className="link" target="_blank" href="https://tailwindcss.com/"><img className="w-10" src="/images/tailwind-css.svg"></img></a>
              <a className="link" target="_blank" href="https://nextjs.org/"><img className="w-10" src="/images/nextjs-icon.svg"></img></a>
              <a className="link" target="_blank" href="https://openai.com/"><img className="w-10" src="/images/openai.svg"></img></a>
              <a className="link" target="_blank" href="https://huggingface.co/"><img className="w-10" src="/images/hf-logo.svg"></img></a>
            </div>
          </div>
          <p className="">
            Copyright © 2023
            <a
              className="link hover:text-blue-500"
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
    </section>
  );
}
