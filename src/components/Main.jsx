import transfer from "../images/transfer.jpg"

const Main = () => {
    // const images = [
       
    //    transfer
    //   ];
    return (
        <>
            <br />
            <h1 className="font_tangerine">Crown of Locs and Natural Hair LLC  is a private, independent salon providing all locking services specializing in Sisterlocks/Interlocks.</h1>

            {/* <Carousel images={images}/> */}
            <br />
            <br />
            <img
              className="circle, mainImage"
              width="750"
              src={transfer} alt="" />
  <br />
            <br />
        </>
    );
}

export default Main;