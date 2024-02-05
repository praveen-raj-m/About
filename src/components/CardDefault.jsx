import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const Tile = ({ imageUrl, title, description }) => {
  return (
    <div className=" mx-auto h-auto overflow-hidden shadow-lg m-4">
      <img className="w-full h-96 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const CardDefault = () => {
  return (
    <div className="flex">
      <Tile
        imageUrl="/assets/iitm.gif"
        title="Internship"
        description=<p className="mb-4 text-lg md:text-xl lg:text-2xl font-verdana">
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
      />
      <Tile
        imageUrl="public/assets/pred.gif"
        title="Tile 2"
        description="Description for Tile 2. Customize this text as per your requirement."
      />
    </div>
  );
};

export default CardDefault;
