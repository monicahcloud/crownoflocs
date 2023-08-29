
import img from "../images/monicah_color.jpg"
const About = () => {
    return (
        <>
            <div >
            <img
            className="rounded-circle col-2"
              width="250"
              src={img} alt="monicah-bw" />
              </div>
              <div>
                <h5 className="font_tangerine fontSize75px">Monicah</h5>
                <h5>Trained Sisterlock Loctician</h5>
              </div>

        </>
    )
}
export default About;