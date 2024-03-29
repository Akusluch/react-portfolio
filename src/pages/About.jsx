import selfi from './../assets/Alphonse Kusluch.jpg'

export default function About() {
    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Alphonse.
              <br className="hidden lg:inline-block" />I Love web development.
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a new web developer finishing up my bootcamp soon. I am excited to see what roads my coding career leads me down. I have only been coding for about 6 months but i have grown so much in that time and hope to continue growing. 
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={selfi}
              className="object-cover object-center rounded"
              alt="Selfi"
            />
          </div>
        </div>
      </section>
    );
}