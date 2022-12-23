import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon" />
              <div>
                <h4>Address</h4>
                <p>
                  Shivaji Chowk <br />
                  Uchagao,Kolhapur,Mahrashtra
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-telephone icon" />
              <div>
                <h4>Reservations</h4>
                <p>
                  <strong>Phone:</strong> 9579048982
                  <br />
                  <strong>Email:</strong> pranavshinde6773@gmail.com
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-clock icon" />
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat: 11AM</strong> - 23PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Sahyadri</span>
            </strong>
            . All Rights Reserved
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
