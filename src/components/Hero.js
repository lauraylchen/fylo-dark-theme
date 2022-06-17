import logo from '../images/logo.svg';
import illustrationIntro from '../images/illustration-intro.png';
import bgCurvyMobile from '../images/bg-curvy-mobile.svg';

const Hero = () => {
  return (
    <header>
      <div className="bg-darkBlue">
        <nav>
          <div className='flex justify-between'>
            <img src={logo} alt='Fylo Company Logo' />
            <div className="flex font-raleway">
              <a href="/">Features</a>
              <a href="/">Team</a>
              <a href="/">Sign In</a>
            </div>
          </div>
        </nav>
        <img src={illustrationIntro} alt="Banner Illustration" />
        <img src={bgCurvyMobile} className='w-full' alt="Curvy Illustration Background" />
      </div>
      <div className='bg-darkBlueMain'>
        <h2>All your files in one secure location, accessible anywhere.</h2>
        <p>
          Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
        </p>
        <button>Get Started</button>
      </div>
    </header>
  );
}

export default Hero;
