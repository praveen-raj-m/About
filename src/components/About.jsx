
function About() {
  return (
    <div className="w-screen mt-8 flex px-6 h-screen flex-col max-w-full relative">
      <div className="flex items-center justify-center relative">
        <div className="flex-shrink-0 h-full w-2 bg-dark_bg"></div>{" "}
        <div className="ml-4">
          {" "}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-candara italic relative z-10">
            &quot;The core advantage of data is that it tells you something about the
            world that you didn&apos;t know before.&quot;{" "}
          </h1>
          <span className="text-custom-orange pt-2 font-candara text-3xl md:text-4xl lg:text-5xl flex justify-end ">
            - Hilary Mason
          </span>
          <span className=" flex text-cblack italic justify-end text-xl">
            Entrepreneur, Data Scientist
          </span>
        </div>
      </div>

      <div className="w-screen mt-8 flex  h-screen flex-col max-w-full">
        <p className="mb-8 text-4xl font-bold font-monaco">
          {" "}
          Lets talk Data...
        </p>
        <p className="mb-4 text-lg md:text-xl lg:text-2xl font-verdana">
          Data analytics goes beyond plots and numbers. It holds the key to the
          answers and the analyst must ask the right questions to unfold the
          valuable insights concealed within. Through my undergrad, my focus has
          been on projects and internships centered around data handling and
          visualization. Let me highlight some key insights gained.
        </p>

        <p className="mb-4 text-lg md:text-xl lg:text-2xl font-verdana">
          During my tenure as a{" "}
          <span className="text-custom-orange">
            {" "}
            Computer Vision intern (2022){" "}
          </span>{" "}
          at IIT Madras in 2022, I played a pivotal role in a team that
          developed a deep learning pipeline (F1 score - 73.2%). Our objective was to interpret and
          detect live feed data from traffic signals, with a particular emphasis
          on addressing the Indian roads. My responsibilities included the
          collection and analysis of Indian road data, which served as the
          foundation for training our deep learning models. In 2021, as a{" "}
          <span className="text-custom-orange">
            Deep Learning Intern (2021){" "}
          </span>{" "}
          at the Space Systems Laboratory, IIIT Delhi, I delved into the
          analysis and visualization of satellite data for orbit determination
          of satellites. This project presented a unique challenge as I worked
          with raw data in SP3 format for the first time. Subsequently, we
          trained an ensemble model (R-squared error 0.63), which is one of it&apos;s kind.
        </p>

        <p className="mb-4 text-lg md:text-xl lg:text-2xl font-verdana">
          I align my coursework with a focus on data by opting for classes such
          as “Data Visualization”, “Knowledge Representation”, and “Fundamentals
          of Statistical Learning”. Also, I pick up practical skills from the
          YouTube University. Especially
          <span className="text-custom-orange">
            {" "}
            <a
              href="https://www.youtube.com/@storytellingwithdata"
              target="_blank"
              rel="noopener noreferrer"
              className="link-symbol"
            >
              Story Telling With Data
            </a>{" "}
          </span>
          gave me a fresh perspective on data visualization. I understood the
          importance of creating engaging visualizations, directing the
          audience&apos;s attention strategically, and transforming good visuals into
          compelling narratives. I applied the skills to one of my projects
          <span className="text-custom-orange">
            {" "}
            <a
              href="https://github.com/praveen-raj-m/LiveForecastAndAnalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="link-symbol"
            >
              Live Forecasting and Analytics
            </a>
          </span>
          . In this project, I preprocessed the data, performed EDA, and trained
          a forecasting model with a R-squared error of 0.996 (which is pretty
          good). Also, I leveraged Tableau dashboards to bring out exciting
          insights. This project honed my skills mainly data visualization and
          problem-solving.
        </p>
        <div className="flex items-center mt-5 mb-5 gap-7 justify-center flex-col md:flex-row">
          <div className="flex flex-col items-center">
            <img
              src="assets/iitm.gif"
              alt="The One from IIT Madras"
              className="max-w-full h-auto"
            />
            <p className="text-center italic text-xl font-verdana text-gray-600">
              One from IIT Madras
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="assets/pred.gif"
              alt="Description of the second image"
              className="max-w-full h-auto"
            />
            <p className="text-center italic text-xl font-verdana text-gray-600">
              One from My Analytics Project
            </p>
          </div>
        </div>

        <p className="mb-4 text-lg md:text-xl lg:text-2xl font-verdana">
          I am currently working as a
          <span className="text-custom-orange"> Database developer</span> at the
          Energy Efficient Center, ASU. In this role, I design and build
          applications utilizing the MERN stack to meet the specific
          requirements of the team. Additionally, I conduct visualization and
          analysis of energy data sourced from commercial and industrial sites,
          contributing valuable insights to energy assessments conducted by the
          group.
        </p>
        <p className="mb-4 text-lg md:text-xl lg:text-2xl font-verdana">
          I have a strong belief in the transformative power of data for
          businesses. Currently seeking internship opportunities for Summer
          2024, I aim to further develop my skills by collaborating with
          professionals in the field. My goal is to join a dynamic team where I
          can actively contribute and add value to impactful projects.
        </p>
        <p className="pb-10 text-custom-orange text-3xl font-monaco">
          

          <a
              href="https://drive.google.com/file/d/1yu9VPl4KGLVCrlSsBqXJTzrsDiM_c2DX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="link-symbol"
            >
              Link to my CV
            </a>
        </p>
      </div>
    </div>
  );
}

export default About;



