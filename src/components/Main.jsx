
// import Carousel from 'react-bootstrap/Carousel';
// import pic3 from "../images/20220820_121848.jpg"
// import pic4 from "../images/20220820_121857.jpg"
// import pic5 from "../images/20220820_181851.jpg"
import { useState, useEffect, useRef } from 'react';


const Main = () => {

    const images = [
        {url:"https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/272920895_10159826855581118_4598242148598824615_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ioD91qwOHjEAX8oER5L&_nc_ht=scontent-ord5-1.xx&oh=00_AfC4gn6g4tVaaDM-Sm3wkdnc7u7umMAr0UHC-zRdExtsqQ&oe=64EBF643"},
        {url:"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/272874157_10159826855466118_8957006912199979987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y-4xaZyt3AkAX8DYlZK&_nc_ht=scontent-ord5-2.xx&oh=00_AfBwlZz5b5YF1zA27P7KSEe4rj33VflT5l9P_RqcdIM0dA&oe=64EC8DF9"},
        {url:"https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/273014796_10159826855271118_6316802090697066875_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=pEujkej08-AAX9Ocwny&_nc_ht=scontent-ord5-1.xx&oh=00_AfAAfVzcLV_lbMYj-e6DzgscExMtzqz-BNZW-LXI3exeBA&oe=64F6D2D9"},
        {url:"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/272871397_10159826855606118_2925405232570321899_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=5FZfBOUCoTcAX-5n2yk&_nc_ht=scontent-ord5-2.xx&oh=00_AfBfgTy0tDn0GWXyZ3krVpEaYs22Eol-C32H8cnfJm42Rg&oe=64F6F69A"}
 

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
    }, [index]);

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
            className="rounded-pill"
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