import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then(() => {
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg='light' variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features"><Link to='/category/0'>Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        {/* <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/career'>Career</Link>
                        </Nav> */}
                        <Nav>
                            {user && 
                                <>{user.displayName} <FaUserCircle style={{fontSize : '2rem'}}></FaUserCircle></>
                            }
                           
                                {
                                    user ?  
                                    <Button variant="secondary" onClick={handleLogOut}>Logout</Button> : 
                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;