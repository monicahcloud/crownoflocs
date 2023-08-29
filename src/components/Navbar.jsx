
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <>
      <Nav className=" Navbar justify-content-center" style={{
        textAlign: "center",
        fontFamily: "georgia",
        color: 'white',
        fontSize: "20pt"
      }}
        activeKey="/home" >
        <Nav.Item >
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/policy">Policy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/services'>Services</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href='/about'>Meet Monicah</Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link href='/contact'>Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default Navbar;