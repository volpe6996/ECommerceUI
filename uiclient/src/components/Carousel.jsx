import { useState } from "react";
import React from "react";
import '../assets/globals.css';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';

const slides = [{ src: img1, title: "Now you don’t have to choose between privacy and progress", description: "Google Cloud Confidential Computing, where privacy meets perfomance powered by AMD EPYC™ processors.", button: "Learn More" },
{ src: img2, title: "Alveo X3 Series for Fintech Applications", description: "Low latency meets adaptable acceleration.", button: "Learn More" },
{ src: img3, title: "The Ultimate Processor for Gaming", description: "Experience ultimate gaming performance with AMD Ryzen™ 7000X3D Series processors featuring AMD 3D V-Cache technology.", button: "Get Yours" }];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const delay = 8000;

    const timeoutRef = React.useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [currentIndex]);

    return (
        <div className="col-12 row slider p-0 m-0">
            <div className="sliderContainer d-flex">
                <div className="col-6 p-0 m-0">
                    <img className="slideImage" src={slides[currentIndex].src} />
                </div>

                <div className="slideInfo d-flex flex-column col-6 m-0">
                    <div className="d-flex flex-column flex-grow-1">
                        <h1 className="text-white fw-bold p-0 pb-4 m-0">{slides[currentIndex].title}</h1>
                        <p className="text-white p-0 m-0">{slides[currentIndex].description}</p>
                    </div>
                    <div className="">
                        <button className="row col-xl-4 col-lg-6 col-md-8 col-12 align-self-end flex-column justify-content-center p-2 m-0">
                            <p className="col-9 m-0">{slides[currentIndex].button}</p>
                            <p className="col-3 m-0 d-flex justify-content-center" style={{ fontSize: "30px" }}>{">"}</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="dotsContainer">
                {slides.map((_, slideIndex) => (
                    <div key={slideIndex} className={`sliderDot${currentIndex === slideIndex ? " active" : ""}`} onClick={() => {setCurrentIndex(slideIndex)}}/>
                ))}
            </div>
        </div>
    );
};

export default Carousel;