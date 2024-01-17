import './register.scss'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register">

         <div className="card">

             <div className="left">
                <h1>Social Media</h1>
                <p>Connect, Share, Thrive – Your social journey begins with a single login. Join us now!</p>
                <span>Do you have an account?</span>
                <Link to ="/login">
                <button>Login</button>
                </Link>
               
             </div>    

             <div className="right">
                <h1>Register</h1>
                <form >
                  <input type="text" placeholder="Username"/>
                  <input type="email" placeholder="Email"/>
                  <input type="text" placeholder="Name"/>
                  <input type="password" placeholder="Password"/>
                  <button>Register</button>
                </form>
             </div>
       
         </div>

            

        </div>
    )

}

export default Register