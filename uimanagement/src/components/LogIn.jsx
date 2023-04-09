import {Button, Form, Alert} from 'react-bootstrap';
import { useState } from 'react';
import UseLogin from '../hooks/UserHook';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const nav = useNavigate();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({ email: '', password: '', });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        UseLogin(formData)
          .then((result) => {
            if (result)
              nav('/');
          })
          .catch(() => {
            setError("Nieprawidłowe dane lub brak permisji.");
          });
      };

    return (
        <div className="logInContainer">
            <div class="container">
                <div class="row justify-content-center my-5">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="card shadow">
                            <div class="card-title text-center border-bottom">
                                <h2 class="p-3">Login</h2>
                            </div>
                            <div class="card-body">
                                <Form onSubmit={handleLogin}>
                                    <div class="mb-4">
                                        <Form.Label for="email" class="form-label">Email</Form.Label>
                                        <Form.Control type="text" class="form-control" name="email" value={formData.email} onChange={handleInputChange} />
                                    </div>
                                    <div class="mb-4">
                                        <Form.Label for="password" class="form-label">Password</Form.Label>
                                        <Form.Control type="password" class="form-control" name="password" value={formData.password} onChange={handleInputChange} />
                                    </div>
                                    <div class="mb-4">
                                        <Form.Check type="checkbox" class="form-check-input" id="remember" label="Remember Me" />
                                    </div>
                                    <div class="d-grid">
                                        <Button variant="primary" type="submit">Login</Button>
                                    </div>
                                </Form>
                                {error && <Alert className="m-0 mt-3" variant="danger">{error}</Alert>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;