
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="w-screen max-w-full min-h-[92vh] flex flex-col md:flex-row p-4 px-4 gap-8">
      {/* Left Side  */}
      <div className="flex h-full min-w-[40vw]">
        <img
          src="assets/hero/HeroSection.jpeg"
          className="object-cover rounded-lg shadow drop-shadow-2xl shadow-dark_bg w-full h-[50vh] md:h-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col font-candara pt-10 overflow-hidden overflow-y-auto lg:pt-20 px-4">
        <h1 className="text-5xl lg:text-6xl font-black mb-4">
          So, Who Am I?
        </h1>
        <div className="border-b-2 mb-10 w-full"></div>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 ">
          I am a passionate and result-driven data enthusiast with a keen
          interest in the world of data analytics.
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6">
          I am currently pursuing my Masters at{" "}

          <span className="text-custom-orange">Arizona State University </span>
          majoring in Computer Science.
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6">
          I use{" "}
          <span className="text-custom-orange">
            Python, SQL, Tableau, and Excel
          </span>{" "}
          to work with complex datasets. My expertise extends to statistical
          analysis enabling me to draw meaningful conclusions and design
          insightful dashboards analyzing complex datasets.
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6">
          On a random day, I{" "}
          <span className="text-custom-orange text-xl md:text-2xl lg:text-3xl">
            <Typewriter
              words={[
                "ponder over AI's takeover.",
                "vibe to good music ^_^",
                "spend hours in my code and find it was that one semicolon the whole time.",
                "never say no to hot chocolates",
                "play badminton for fun :)",
                "read books.",
                "enjoy brainstorming ideas over any topic.",
              ]}
              loop
              cursorBlinking
              typeSpeed={50}
              deleteSpeed={40}
            />
          </span>
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6">
          I&apos;m on my journey to acquire all the infinity stones to uncover hidden
          insights in data.
        </p>
      </div>
    </div>
  );
}

export default Hero;