
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });

          updateUser(name, photo)  
          .then(() => {
            console.log('Profile Updated')
          }).catch((error) => {
            console.log(error)
          });

    }

    return (
        <Container className='w-25 mx-auto'>
            <h3 className='text-center my-3'>Please Register!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo url" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  name='password' placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms And Conditions" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{width: '100%'}}>
                    Register
                </Button>

                <br />

                <Form.Text className="text-success">
                    Have an account? <Link to='/login'>Please login</Link>
                </Form.Text>

                <Form.Text className="text-danger">
                    
                </Form.Text>

                <Form.Text className="text-success">
                   
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;