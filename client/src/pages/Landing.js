import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem fo shizzle fizzle black amizzle, the bizzle crazy elit. Nullam
            pot velizzle, that's the shizzle pizzle, break it down quis, yo
            mamma vel, gangsta. Pellentesque eget tortor. Sed erizzle. Gizzle
            izzle bow wow wow dapibus turpis check it out own yo'.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
