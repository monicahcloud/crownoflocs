import transfer from "../images/newclients.png"

const Main = () => {
    // const images = [
       
    //    transfer
    //   ];
    return (
        <>
            <br />
            <h2 className="font_tangerine">Crown of Locs and Natural Hair LLC  is a private, independent salon providing all locking services specializing in Sisterlocks and Microlocks.</h2>

            {/* <Carousel images={images}/> */}
            <br />
            <br />
            <img
              className="circle mainImage grow"
              width="100"
              src={transfer} alt="" />
  <br />
            <br />
        </>
    );
}

export default Main;