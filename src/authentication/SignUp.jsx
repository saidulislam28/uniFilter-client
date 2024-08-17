import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center">
      <div className="login-container max-w-xl">
        <div className="heading">Register </div>
        <form className="form-section">
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
            type="text"
            name="photo"
            placeholder="Photo URL"
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
  );
};

export default SignUp;
