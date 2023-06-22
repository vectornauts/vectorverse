import Header from "@/components/header";

export default async function Home() {
  return (
    <section>
      <div className="hero bg-base-200 w-100">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/vectorverse.png"
            className="max-w-sm rounded-lg shadow-2xl mx-3"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to VectorVerse</h1>
            <p className="py-6 prose">
              We are reimagining the way you explore, understand, and think
              about your embeddings. Our cutting-edge approach, grounded in
              network geometry, will streamline your process of categorization
              and metadata assignment.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="h2 w-2/3 p-8">
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
    </section>
  );
}
