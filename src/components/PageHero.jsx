import logo from '../images/logo.png'

function PageHero() {
    return ( 
        <>
        <div className="Hero container-fluid" >
        <img id="logo_img" src={logo} alt="Logo" />
        </div>
        </>
     );
}

export default PageHero;