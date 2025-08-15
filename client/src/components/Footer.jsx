import "./Footer.css";

export const Footer = () => {
  return (
    // <!-- Footer div -->
    <section className="footer">
      <div className="footer-container">
        <div className="logo-address-container">
          <img
            src="image/logo-bg-remove.png"
            alt="Horizon Homes"
            className="img-logo"
          />
          <h4 className="sp-address-out">
            <span className="sp-address-in">Horizon Homes Real Estate</span>
            <br />
            1234 Skyline Avenue, Suite 567 Downtown Business District Cityville,
            ST 98765 United States
          </h4>
        </div>

        <div className="social-link">
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className="contacts">
          <p>Phone: +1 (555) 123-4567</p>
          <p>Email: contact@horizonhomes.com</p>
        </div>
      </div>
      <div className="foot-end">
        <p>© 2025 Horizon Homes Ltd. All Rights Reserved.</p>
        <p>
          created by
          <a href="https://github.com/nibear01" className="me">
            @nibear01
          </a>
        </p>
      </div>
    </section>
  );
};
