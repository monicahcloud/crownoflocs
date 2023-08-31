import data from "../data.json"
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import image from "../images/priceValue.jpg"

const Services = () => {
    return (
        <>
            <div className="">
                <h3 className=""
                    style={{
                        textAlign: "center",
                        marginTop: "10px",
                        marginBottom: "10px",
                        fontFamily: "georgia"
                    }}>
                    Our Services
                
                </h3>
            </div>
            <Container
                className="spacing"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    textAlign: "center",
                }}>
                <div className="">
                    {data.map((item) => {
                        return (
                            <>
                                <div
                                    key={item.id}
                                    style={{ maxWidth: "100 px" }}>
                                    {/*<div className="row g-0">
                                        <div className="col md-4">
                                             <img
                                                style={{
                                                    display: "flex",
                                                    width: "400px",
                                                    height: "310px",
                                                }}
                                                src={item.img}
                                                className="img-fluid rounded-start"
                                                alt="book a service"
                                            /> 
                                        </div>*/}
                                        <div className="col-md-12">
                                            <div className="">
                                                <Card.Title>{item.service}</Card.Title>
                                                <Card.Text>{item.price}</Card.Text>
                                                <Card.Text>{item.consult}</Card.Text>
                                                <Card.Text>{item.deposit}</Card.Text>
                                                <Card.Text>{item.reties}</Card.Text>
                                               
                                            </div>
                                        </div>
                                    {/* </div> */}
                                </div>
                                <br />
                            </>
                        );
                    })}
                </div>
            </Container>
            <p className="font_alconica">Please review our policy before booking.
                <Link to="/policy"> POLICY </Link></p>
            <p> By booking a consultation, you acknowledge and agree to of our polices included
                in Crown of Locs and Natural Hair's website.</p>
        </>

    );
};

export default Services;

