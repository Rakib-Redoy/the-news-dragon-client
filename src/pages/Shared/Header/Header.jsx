import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex'>
                <Button className='rounded-0' variant="danger">Latest</Button>
                <Marquee className='text-white bg-secondary' speed={80}>
                    I can be a React component, multiple React components, or just some text....
                    I can be a React component, multiple React components, or just some text....
                    I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;