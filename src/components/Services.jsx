import data from "../data.json"
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
    
    return (
        <>
            <div className="col-md-12">
                <h3 className="color1 font_tangerine"
                    style={{
                        textAlign: "center",
                        marginTop: "3px",
                        marginBottom: "3px",
                        fontSize:"65px"
                    }}><br/>
                    Our Services
                                    </h3><br/>
            </div>
            <Container classname="col-md-12"
             style={{
                textAlign: "center",
                marginTop: "3px",
                marginBottom: "3px",
                fontFamily: "georgia"
            }}
                className="spacing"
                >
                <div >
                    {data.map((item) => {
                        return (
                            <>
                                <div
                                    key={item.id}
                                    >
                                    <div className="row g-0">
                                        <div className="col md-4">
                                             <img
                                                style={{
                                                    display: "flex",
                                                    width: "50vw",
                                                    height: "50vh",
                                                }}
                                                src={item.img}
                                                className="img-fluid rounded-start"
                                                alt="book a service"
                                            /> 
                                        </div>
                                        <Card className="" style={{ width: '50rem' }}>
                                            <Card.Body >
                                                <Card.Title>{item.service}</Card.Title><br/>
                                                <Card.Text>{item.price}</Card.Text>
                                                <Card.Text>{item.consult}</Card.Text>
                                                <Card.Text>{item.deposit}</Card.Text>
                                                <Card.Text>{item.reties}</Card.Text>
                                                <Card.Text>{item.description}</Card.Text>
                                            </Card.Body>
                                           </Card>
                                        
                                </div>
                                </div>
                                <br />
                            </>
                        );
                    })}
                </div>
            </Container>
            <p className="font_alconica col-md-12">Please review our policy before booking.
                <Link to="/policy"> POLICY </Link></p>
            <p> By booking a consultation, you acknowledge and agree to of our polices included
                in Crown of Locs and Natural Hair's website.</p>
        </>

    );
};

export default Services;

