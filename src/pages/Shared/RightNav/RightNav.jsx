import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4 className='mb-4'>Login With</h4>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-secondary"> <FaGithub></FaGithub> Login  With  Github</Button>
            </div>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item > <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item ><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item ><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;