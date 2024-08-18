import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const SignUp = () => {

  const { signUp, updateProfileinfo } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (e) =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    
    signUp(email, password)
    .then(result =>{
      console.log('succcessfully registered')
      console.log(result.user);
      
      updateProfileinfo(name)
      .then(navigate('/'))
      .catch(error => {
       console.log('something went wrong')
       console.log(error);
      })

    })
    .catch(err =>{
      console.log("something went wrong")
      console.log(err);
    })
    console.log(name, email, typeof(password));
    e.target.reset();
    

    



  }


  return (
    <div className="min-h-[730px]">
      <div className="flex justify-center ">
      <div className="login-container max-w-xl">
        <div className="heading">Register </div>
        <form onSubmit={handleSignUp} className="form-section">
          <input
            required=""
            className="input"
            type="text"
            name="name"
            placeholder="Name"
          />

          

          <input
            required=""
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
          />

          <input
            required=""
            className="input"
            type="password"
            name="password"
            placeholder="Password"
          />

          <br />

          <br />
          {/* <label className="" htmlFor="">
            Chose Your Role:
          </label> */}
          {/* <br />
          <br /> */}

          {/* <select
            name="role"
            className="rounded-md px-6 py-2 border border-green-400"
          >
            <option value="worker">worker</option>
            <option value="creator">creator</option>
          </select> */}

          <input className="login-button" type="submit" value="Sign Up" />
        </form>

        <p className="agreement">
          Already have an account?
          <Link to="/signIn">
            <span className="underline">Signin</span>
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
