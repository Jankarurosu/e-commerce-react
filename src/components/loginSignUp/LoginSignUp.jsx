import './LoginSignUp.css'

export const LoginSignUp = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div><div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>I agree with the <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>

            </div>
        </div>
    )
}

