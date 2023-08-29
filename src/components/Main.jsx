
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';
// import pic3 from "../images/20220820_121848.jpg"
// import pic4 from "../images/20220820_121857.jpg"
// import pic5 from "../images/20220820_181851.jpg"
import { useState, useEffect, useRef } from 'react';

const Main = () => {

    const images = [
        {url:"https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/272920895_10159826855581118_4598242148598824615_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ioD91qwOHjEAX8oER5L&_nc_ht=scontent-ord5-1.xx&oh=00_AfC4gn6g4tVaaDM-Sm3wkdnc7u7umMAr0UHC-zRdExtsqQ&oe=64EBF643"},
        {url:"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/272874157_10159826855466118_8957006912199979987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y-4xaZyt3AkAX8DYlZK&_nc_ht=scontent-ord5-2.xx&oh=00_AfBwlZz5b5YF1zA27P7KSEe4rj33VflT5l9P_RqcdIM0dA&oe=64EC8DF9"},
        {url:"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/293537889_1016050327341118_3285235071669850506_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=CNvZA5gN_1kAX935w7j&_nc_ht=scontent-ord5-2.xx&oh=00_AfA-f6jdVdJEUDShSqfXOvXr02Vu_H9Vwp5b0-yx7n74SA&oe=64EC0F57"},
        {url:"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/300576159_10159706813221865_7319814243983167033_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rWl0Z3mz9xkAX_9_IBe&_nc_ht=scontent-ord5-2.xx&oh=00_AfC6whn5awmRcrodCgRhgjjYIac-rZvRsvSfbD_xepUQSA&oe=64ED7F16"}
    
    
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
        {/* <div className="slideshow">
           
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((pic, index) => (
                    <div
                        className="slide"
                        key={index}
                    >
                        <img src={pic.url} alt=""/></div>
                ))}
            </div>          
            </div> */}
             <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">

                <div>
                   <h1 className="font_trattatello fontSize75px">Fall Promotion</h1>
                    <h1 className="font_tangerine fontSize75px">Sisterlocks™ Package</h1></div>
                  <div>
                <h1 className="grow">$699</h1></div>
                <div> <p className="removespace">*$up to 4"</p>
                <p >*$75 per additional</p></div>
                </div>    
                                        
                 </> 
    );
}

export default Main;

// const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // }
    // return (
    //     <>
    //         <Container className='slideschoe-container-fluid py-2'>
    //             <Row className='align-items-right'>                    
    //                 <Col className='col-md-5' >
    //                     <Carousel fade carousel1 >
    //                         <Carousel.Item className=''>
    //                             <img
    //                                 className="d-block w-50"
    //                                 src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/272920895_10159826855581118_4598242148598824615_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ioD91qwOHjEAX8oER5L&_nc_ht=scontent-ord5-1.xx&oh=00_AfC4gn6g4tVaaDM-Sm3wkdnc7u7umMAr0UHC-zRdExtsqQ&oe=64EBF643"
    //                                 alt="First slide"
    //                             />
    //                         </Carousel.Item>
    //                         <Carousel.Item className=''>
    //                             <img
    //                                 className="d-block w-50"
    //                                 src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/272874157_10159826855466118_8957006912199979987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y-4xaZyt3AkAX8DYlZK&_nc_ht=scontent-ord5-2.xx&oh=00_AfBwlZz5b5YF1zA27P7KSEe4rj33VflT5l9P_RqcdIM0dA&oe=64EC8DF9"
    //                                 alt="Second slide"
    //                             />
    //                         </Carousel.Item>
    //                         {/* <Carousel.Item>
    //                             <img
    //                                 className="d-block w-50"
    //                                 src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/293537889_1016050327341118_3285235071669850506_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=CNvZA5gN_1kAX935w7j&_nc_ht=scontent-ord5-2.xx&oh=00_AfA-f6jdVdJEUDShSqfXOvXr02Vu_H9Vwp5b0-yx7n74SA&oe=64EC0F57"
    //                                 alt="Third slide"
    //                             />
    //                         </Carousel.Item> */}
    //                         <Carousel.Item>
    //                             <img
    //                                 className="d-block w-50"
    //                                 src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/272860052_10159826855436118_2392307572063748896_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CmxX8y7wnGwAX-mtQO2&_nc_ht=scontent-ord5-2.xx&oh=00_AfBMgr4okItlTZn3maSaBqEebCPzY2v_g01P3yohhrg_QA&oe=64EC55F4"
    //                                 alt="Third slide"
    //                             />
    //                         </Carousel.Item>
    //                         {/* <Carousel.Item className=''>
    //                             <img
    //                                 className="d-block w-50"
    //                                 src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/193838971_10159449390021118_8897806437591794996_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p8quvS6nolUAX9TtNRS&_nc_ht=scontent-ord5-2.xx&oh=00_AfDZLmb2J6OiEVzUFg9K2jsISFKmYeoJ1n6Oy0nvPm7x4Q&oe=64EBE9C2"
    //                                 alt="First slide"
    //                             />
    //                         </Carousel.Item> */}
    //                         <Carousel.Item className=''>
    //                             <img
    //                                 className="d-block w-50"
    //                                 src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/272871397_10159826855606118_2925405232570321899_n.jpg?_nc_cat=0&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Hr8O_mOiKFgAX8n-uqL&_nc_ht=scontent-ord5-2.xx&oh=00_AfACiHQ_yuUmNEro-quRKTibsyVXGMvQj5X4_aPZECCpQw&oe=64EB191A"

    //                                 alt="First slide"
    //                             />
    //                         </Carousel.Item>
    //                     </Carousel>
    //             </Col>
    //             <Col className='col-md-7' >
    //                     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">

    //                                 <div>
    //                                     <h1 className="font_trattatello fontSize75px">Fall Promotion</h1>
    //                                     <h1 className="font_tangerine fontSize75px">Sisterlocks™ Package</h1></div>
    //                                 <div>
    //                                     <h1 className="grow">$699</h1></div>
    //                                 <div> <p className="removespace">*$up to 4"</p>
    //                                     <p >*$75 per additional</p></div>
    //                             </div>                            
    //                 </Col>
    //         </Row>
    //     </Container >
    //         </>
    // )
   

