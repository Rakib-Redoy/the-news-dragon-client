import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0'



    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate(from)
          })
          .catch((error) => {
            console.log(error)
          });
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3 className='text-center my-3'>Please Login!</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  name='password' placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{width: '100%'}}>
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">
                    Don't Have an account? <Link to='/register'>Please Register</Link>
                </Form.Text>
                <Form.Text className="text-danger">
                    
                </Form.Text>
                <Form.Text className="text-success">
                   
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;