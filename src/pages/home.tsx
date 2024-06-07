
export default function Home() {
  return (
    <div className='flex h-full justify-center items-center'>
      <div className='flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-[100px]'>
        <div className='size-56 sm:size-60 lg:size-96 overflow-hidden rounded-full border border-violet-400 p-2 m-auto lg:m-0'>
          <img className="rounded-full" src="/images/me.jpeg" alt="it's me" />
        </div>

        <div className="max-w-[450px] flex flex-col gap-6 m-auto p-2">
          <h1 className="text-center md:text-start text-4xl md:text-6xl font-dancing">Sameer <span className="text-violet-400 font-dancing">Pathania</span></h1>
          <p className="text-center md:text-start text-sm md:text-base px-2 md:px-0">
            Frontend Developer skilled in HTML, CSS, JavaScript, and React. Passionate about creating responsive web applications and continuously learning new technologies.
          </p>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <a href="/cv/sameer.pdf" target="_blank" className="w-fit rounded-full bg-violet-400 px-6 py-2 text-lg md:text-xl flex gap-2 items-center justify-center">
              <i className="fa-solid fa-download"></i>
              <span>Resume</span>
            </a>
            <div className="flex gap-3 mr-4">
              <a href="https://github.com/sameerpathania1" target="_blank">
                <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/sameerpathania/" target="_blank">
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
