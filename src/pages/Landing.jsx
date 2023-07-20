import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage.js";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I&apos;m baby beard four dollar toast biodiesel synth irony
            knausgaard wolf listicle pitchfork. Lyft knausgaard artisan, fashion
            axe jean shorts banjo neutra lomo stumptown fingerstache. Tonx
            thundercats lomo kinfolk bitters asymmetrical church-key disrupt
            typewriter forage coloring book hell of marfa beard wolf. Cloud
            bread twee fit.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
