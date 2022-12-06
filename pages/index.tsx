import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Edi Prastyo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <header>
            <nav className="flex flex-row justify-between items-center py-5 border-gray-white border-b">
              <Link className="font-medium text-2xl text-blue-dark" href="/">
                Edi.
              </Link>
              <div className="w-full text-end">
                <ul className="flex flex-row justify-end gap-6">
                  <li>
                    <a href="#" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#works">Works</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <section id="hero">
            <div className="w-full mx-auto text-center py-6">
              <span className="font-medium text-xl text-blue-primary mb-2">
                Hello,
              </span>
              <h1 className="font-bold text-4xl text-blue-dark leading-normal mb-6">
                I&apos;m Edi Prastyo <br />
                Frontend Developer
              </h1>
              <p className="font-light text-gray-light mb-12">
                Developing new user-facing features, determining the structure
                and design of web pages, building reusable codes, optimizing
                page loading times of web pages.
              </p>
              <div className="flex flex-row gap-3 justify-center mb-8">
                <div>
                  <a
                    href="https://wa.me/+6281239512998"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1O4EZbRy8PEg-zi2qFK0Q_xMl2-E3KrFb/view?usp=share_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-primary underline px-6"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              <div className="flex flex-row gap-3 justify-center">
                <div className="bg-gray-light rounded-md p-1 hover:bg-blue-primary">
                  <a
                    href="https://www.linkedin.com/in/edi-prastyo-66ab9a162/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                    </svg>
                  </a>
                </div>
                <div className="bg-gray-light rounded-md p-1 hover:bg-blue-primary">
                  <a
                    href="https://github.com/ediprast"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="bg-gray-light rounded-md p-1 hover:bg-blue-primary">
                  <a
                    href="https://wa.me/+6281239512998"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="bg-gray-light rounded-md p-1 hover:bg-blue-primary">
                  <a
                    href="https://www.instagram.com/ediprastid/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                      <circle cx="11.994" cy="11.979" r="3.003"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="skills">
            <div className="py-6">
              <h3 className="font-medium text-2xl text-blue-primary">Skills</h3>
              <p className="font-light text-gray-light">The technology I use</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="skill-item">
                  <p>HTML</p>
                </div>
                <div className="skill-item">
                  <p>CSS</p>
                </div>
                <div className="skill-item">
                  <p>Bootstrap</p>
                </div>
                <div className="skill-item">
                  <p>TailwindCSS</p>
                </div>
                <div className="skill-item">
                  <p>React JS</p>
                </div>
                <div className="skill-item">
                  <p>Next JS</p>
                </div>
              </div>
            </div>
          </section>

          <section id="works">
            <div className="py-6">
              <h3 className="font-medium text-2xl text-blue-primary">Works</h3>
              <p className="font-light text-gray-light">
                Some of the projects I have worked on
              </p>
              <div className="mt-4 flex flex-col gap-6">
                <div className="work-item">
                  <div className="w-full rounded-lg mb-5 overflow-hidden">
                    <Image
                      className="w-full h-56 object-cover"
                      src="/cover-company.jpg"
                      alt="Picture of the author"
                      width={500}
                      height={300}
                    />
                  </div>
                  <h5 className="text-blue-dark text-xl">
                    Company Landing Page
                  </h5>
                  <Link
                    href="/works/company"
                    className="font-light text-gray-light underline hover:text-blue-primary"
                  >
                    Show Detail
                  </Link>
                </div>
                <div className="work-item">
                  <div className="w-full rounded-lg mb-5 overflow-hidden">
                    <Image
                      className="w-full h-56 object-cover"
                      src="/cover-course.jpg"
                      alt="Picture of the author"
                      width={500}
                      height={300}
                    />
                  </div>
                  <h5 className="text-blue-dark text-xl">
                    Online Course Landing Page
                  </h5>
                  <Link
                    href="/works/course"
                    className="font-light text-gray-light underline hover:text-blue-primary"
                  >
                    Show Detail
                  </Link>
                </div>
                <div className="work-item">
                  <div className="w-full rounded-lg mb-5 overflow-hidden">
                    <Image
                      className="w-full h-56 object-cover"
                      src="/cover-agency.png"
                      alt="Picture of the author"
                      width={500}
                      height={300}
                    />
                  </div>
                  <h5 className="text-blue-dark text-xl">
                    Agency Landing Page
                  </h5>
                  <Link
                    href="/works/agency"
                    className="font-light text-gray-light underline hover:text-blue-primary"
                  >
                    Show Detail
                  </Link>
                </div>
                <div className="work-item">
                  <div className="w-full rounded-lg mb-5 overflow-hidden">
                    <Image
                      className="w-full h-56 object-cover"
                      src="/cover-topup.png"
                      alt="Picture of the author"
                      width={500}
                      height={300}
                    />
                  </div>
                  <h5 className="text-blue-dark text-xl">Topup Game</h5>
                  <Link
                    href="/works/topup"
                    className="font-light text-gray-light underline hover:text-blue-primary"
                  >
                    Show Detail
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full border-t border-gray-white py-5">
        <p className="font-light text-gray-light text-center">
          Copyright 2022 • All rights reserved • Edi Prastyo
        </p>
      </footer>
    </div>
  );
}
