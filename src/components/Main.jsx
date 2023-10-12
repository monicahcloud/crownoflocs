
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
import pic14 from '../images/IMG_7114.jpg'
import pic15 from '../images/IMG_7115.jpg'
import pic16 from '../images/IMG_7116.jpg'
import pic17 from '../images/IMG_7117.jpg'
import pic18 from '../images/IMG_6470.jpg'
import pic19 from '../images/IMG_6471.jpg'
import pic20 from '../images/IMG_6472.jpg'
import pic21 from '../images/IMG_6473.jpg'
import pic22 from '../images/IMG_6913.jpg'
import pic23 from '../images/IMG_7079.jpg'
import pic24 from '../images/IMG_7080.jpg'

import { useState, useEffect, useRef } from 'react';


const Main = () => {

    const images = [
        {url: pic3},
        {url: pic4},
        {url: pic5},
        {url: pic2},
        {url: pic1},
        {url: pic6},
        {url: pic7},
        {url: pic8},
        {url: pic9},
        {url: pic10},
        {url: pic11},
        {url: pic12},
        {url: pic13},
        {url: pic14},
        {url: pic15},
        {url: pic16},
        {url: pic17},
        {url: pic18},
        {url: pic19},
        {url: pic20},
        {url: pic21},
        {url: pic22},
        {url: pic23},
        {url: pic24}
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
    }, [index,images.length]);

    return (
        <>
                <br/>
            <div
                className=" slideshow slideshowSlider"
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
             src={pic.url} alt=""/></div>
                ))}
            </div>          
           
             <div  className=" col-md-12">

                <div>
                   <h1 className="font_trattatello fontSize75px">Fall Promotion</h1>
                    <h1 className="font_tangerine fontSize75px">Sisterlocks™ Package</h1></div>
                  <div>
                <h1 className="grow">$699</h1></div>
                <div> <p className="removespace">*$up to 4"</p>
                <p >*$75 per additional</p></div>
                <br/>
                <h5 style={{ color: 'red' }}>Package Includes</h5>
                <ol style={{ listStyleType: 'none' }}>
                    <li>Consultation - $45 due at booking and will be applied towards overall price.</li>
                    <li>Locking Session - 1-3 days depending on length and density of hair</li>
                    <li>1st Retightening Session</li>
                </ol>
                </div>    
                                        
                 </> 
    );
}

export default Main;