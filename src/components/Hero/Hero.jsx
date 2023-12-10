import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="text-box">
        <h1>Build your perfect resume with ease!</h1>
        <p>
          Your resume is your first impression of potential employers. Make it
          count! Our resume builder empowers you to create visually appealing
          resumes that grab attention and highlight your strengths.
        </p>
        <a className="button button--filled button--lg" href="#editor">
          Get started
        </a>
      </div>
      <div className="image-box">
        <img src="/resume-illustration.svg" alt="Resume image" />
      </div>
    </section>
  );
};

export default Hero;
