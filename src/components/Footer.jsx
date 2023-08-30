function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
        <div className="Footer">
            {/* <div  >
            <h5>Email: mycrownlocs@gmail.com</h5>
       </div>
        <div  >
            <h5 >Phone: (262) 770-5142</h5>
        </div> */}
        <div >
            <h5>Copyright @ {year} by Crown of Locs and Natural Hair LLC. | All Rights Reserved</h5>
            <h5>Designed by Monicah Cloud</h5>
        </div> 
        </div>
        </>
    );
}

export default Footer;