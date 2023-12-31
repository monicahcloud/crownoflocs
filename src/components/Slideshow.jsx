
import pic3 from "../images/monicah_retie.jpg"
import pic4 from "../images/r.jpg"
import pic5 from "../images/e.jpg"
import pic1 from '../images/i.jpg'
import pic2 from '../images/ee.jpg'
import pic7 from '../images/t.jpg'
import pic6 from '../images/ss.jpg'
import pic8 from '../images/IMG_5519.jpg'
import pic9 from '../images/IMG_5517.jpg'
import pic10 from '../images/IMG_5515.jpg'
import pic11 from '../images/IMG_5514.jpg'
import pic12 from '../images/IMG_7112.jpg'
import pic13 from '../images/IMG_7113.jpg'
import pic15 from '../images/20220820_121848.jpg'
import pic17 from '../images/IMG_7117.jpg'
import pic18 from '../images/IMG_6470.jpg'
import pic19 from '../images/IMG_6471.jpg'
import pic22 from '../images/IMG_6913.jpg'
import pic23 from '../images/IMG_7079.jpg'
import pic24 from '../images/IMG_7080.jpg'

import { useState, useEffect, useRef } from 'react';


const Slideshow = () => {

  const images = [
    { url: pic3 },
    { url: pic4 },
    { url: pic5 },
    { url: pic2 },
    { url: pic1 },
    { url: pic6 },
    { url: pic7 },
    { url: pic8 },
    { url: pic9 },
    { url: pic10 },
    { url: pic11 },
    { url: pic12 },
    { url: pic13 },
    { url: pic15 },
    { url: pic17 },
    { url: pic18 },
    { url: pic19 },
    { url: pic22 },
    { url: pic23 },
    { url: pic24 }
  ];
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, images.length]);

  return (
    <>
      <div
        className=" slideshow "
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((pic, index) => (
          <div
            className="slide"
            key={index}
          >
            <img
              className="rounded-circle"
              width="350"
              src={pic.url} alt="" /></div>
        ))}
      </div>

      <div className=" col-md-12">
      </div>

    </>
  );
}

export default Slideshow;