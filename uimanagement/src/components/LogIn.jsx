import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LogIn = () => {
    return (
        <div className="logInContainer">
            {/* BOOTSTRAP CONTAINER */}
            <div class="container"> 
                <div class="row justify-content-center my-5">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="card shadow">
                    <div class="card-title text-center border-bottom">
                        <h2 class="p-3">Login</h2>
                    </div>
                    <div class="card-body">
                        <Form>
                        <div class="mb-4">
                            <Form.Label for="username" class="form-label">Email</Form.Label>
                            <Form.Control type="text" class="form-control" id="username"/>
                        </div>
                        <div class="mb-4">
                            <Form.Label for="username" class="form-label">Password</Form.Label>
                            <Form.Control type="password" class="form-control" id="password" />
                        </div>
                        <div class="mb-4">
                            <Form.Check type="checkbox" class="form-check-input" id="remember" label="Remember Me"/>
                        </div>
                        <div class="d-grid">
                            <Button variant="primary" type="submit">Login</Button>
                        </div>
                        </Form>
                    </div>
                    </div>
                </div>
                </div>
            </div>    
        </div>
      );
}
 
export default LogIn;