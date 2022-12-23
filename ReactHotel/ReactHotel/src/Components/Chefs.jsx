import React from "react";

const Chefs = () => {
  return (
    <>
      <section id="chefs" className="chefs section-bg py-5">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Chefs</h2>
            <p>
              Our <span>Proffesional</span> Chefs
            </p>
          </div>
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="chef-member">
                <div className="member-img">
                  <img
                    src="assets/img/chefs/chefs-1.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="social">
                    <a href>
                      <i className="bi bi-twitter" />
                    </a>
                    <a href>
                      <i className="bi bi-facebook" />
                    </a>
                    <a href>
                      <i className="bi bi-instagram" />
                    </a>
                    <a href>
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Master Chef</span>
                  <p>
                  A chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine
                  </p>
                </div>
              </div>
            </div>
            {/* End Chefs Member */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="chef-member">
                <div className="member-img">
                  <img
                    src="assets/img/chefs/chefs-2.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="social">
                    <a href>
                      <i className="bi bi-twitter" />
                    </a>
                    <a href>
                      <i className="bi bi-facebook" />
                    </a>
                    <a href>
                      <i className="bi bi-instagram" />
                    </a>
                    <a href>
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Patissier</span>
                  <p>
                  a strict hierarchy in which the chef plays the lead role. Assignments differ based on the precise needs of a given kitchen, but in most upscale American and European facilities the nomenclature and roles are determined by the Brigade System.
                  </p>
                </div>
              </div>
            </div>
            {/* End Chefs Member */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="chef-member">
                <div className="member-img">
                  <img
                    src="assets/img/chefs/chefs-3.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="social">
                    <a href>
                      <i className="bi bi-twitter" />
                    </a>
                    <a href>
                      <i className="bi bi-facebook" />
                    </a>
                    <a href>
                      <i className="bi bi-instagram" />
                    </a>
                    <a href>
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>Cook</span>
                  <p>
                    Vero omnis enim consequatur. Voluptas consectetur unde qui
                    molestiae deserunt. Voluptates enim aut architecto porro
                    aspernatur molestiae modi.
                  </p>
                </div>
              </div>
            </div>
            {/* End Chefs Member */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Chefs;
