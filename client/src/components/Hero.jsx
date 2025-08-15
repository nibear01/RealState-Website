/* eslint-disable react/no-unescaped-entities */

const Hero = () => {
  return (
    <div>
      {/* <!-- Hero section --> */}
      <div className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Find Your Dream Home with Horizon Homes.
          </h1>
          <p className="hero-text">
            At Horizon Homes, we make homeownership simple and stress-free.
            Whether you're buying, selling, or investing, our expert team is
            here to guide you every step of the way. Explore a wide range of
            luxurious, modern, and affordable properties in prime locations. Let
            us help you find a home that fits your lifestyle and budget.
          </p>
          <img src="image/House.png" alt="" className="hero-house" />
          <img src="image/block-pattern2.png" alt="" className="hero-pattern" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
