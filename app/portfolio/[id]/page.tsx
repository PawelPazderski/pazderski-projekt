"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
];

const JobDetails = ({ params }: { params: { id: string } }) => {

  // Fetch job details based on the id from an API or any data source

  return (
    <div className="mx-auto px-2.5 max-w-screen-lg py-10 text-center">
      <h1 className="mb-3">Job Details - ID: {params.id}</h1>
      {/* Render job details here */}
      <Carousel autoPlay={false} infiniteLoop={true} showStatus={false} emulateTouch={true}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index}`} />
            {/* <p className="legend">Legend {index + 1}</p> */}
          </div>
        ))}
    </Carousel>
    </div>
  );
};

export default JobDetails;
