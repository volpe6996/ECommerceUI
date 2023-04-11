import amd from '../assets/AMD.svg'
import logo from '../assets/navbarLogo.svg'
import apple from '../assets/Apple.svg'
import google from '../assets/Google.svg'

const LogInPage = () => {
    return (
        <div className="loginContainer col-12 d-flex flex-row">
            <div className="left col-6">
                <div className="formContainer">
                    <img className="mb-5" src={logo} height={32} />
                    <h2 className='fw-bold'>Welcome back!</h2>
                    <h4>Sign in to use your account.</h4>
                    <div className="buttonGroup py-5">
                        <button className="pe-2">
                            <img src={google} />
                            Google
                        </button>
                        <button className="ps-2">
                            <img src={apple} />
                            Apple
                        </button>
                    </div>
                    <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, backgroundColor: "#0D0D0D14", height: "2px" }} />
                        <p style={{ margin: "0 8px", fontSize: "12px", fontWeight: "600", color: "#0D0D0D29" }}>or continue with email</p>
                        <div style={{ flex: 1, backgroundColor: "#0D0D0D14", height: "2px" }} />
                    </div>
                    <div class="form">
                        <form>
                            <div class="mb-2">
                                <input type="text" class="input w-100" placeholder='Email address' name="email" />
                            </div>
                            <div class="mb-3">
                                <input type="password" class="input w-100" placeholder='Password' name="password" />
                            </div>
                            <div class="checkbox mb-4 d-flex justify-content-between">
                                <div className="checkboxGroup d-flex align-items-center">
                                    <input type="checkbox" class="" id="remember"/>
                                    <label>Remember Me</label>
                                </div>
                                <div>
                                    <h4>Forgot password?</h4>
                                </div>
                            </div>
                            <div class="d-grid">
                                <button variant="primary" type="submit">Sign in</button>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <p className="d-flex">Don’t have an account?</p>
                        <p style={{color: "#000"}}>Create one</p>
                    </div>
                </div>
            </div>
            <div className="right col-6 d-flex justify-content-center align-items-center">
                <img src={amd} height="240" />
            </div>
        </div>
    );
}

export default LogInPage;