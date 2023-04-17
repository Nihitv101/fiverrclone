import React from "react";
import Slider from "infinite-react-carousel";
import "./Gig.scss";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR GRAPHICS & DESIGNS</span>

          <h1>I will create ai generated art for you</h1>

          <div className="user">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG"
              alt=""
            />
            <span>John Doe</span>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <span>5</span>
          </div>

          {/* Slider */}

          <Slider dots>
            <img
              src="https://fiverr-res.cloudinary.com/images/t_gig_pdf_gallery_view_ver4,q_auto,f_auto/attachments/delivery/asset/0b694a695c231c24cacd998ca3122c4b-1592931054/Press_OakKnoll/create-a-logo-design-for-modern-brands.pdf"
              alt=""
            />

            <img
              src="https://fiverr-res.cloudinary.com/images/t_gig_pdf_gallery_view_ver4,q_auto,f_auto/attachments/delivery/asset/0b694a695c231c24cacd998ca3122c4b-1592931054/Press_OakKnoll/create-a-logo-design-for-modern-brands.pdf"
              alt=""
            />

            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/135752833/original/5418036c1085eb923059247c6c4142f4bfea3790/do-a-minimalistic-wedding-logo.jpg"
              alt=""
            />

            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/152987105/original/49c20285c618bf6165029111c223875b1e0f7513/create-a-logo-design-for-modern-brands.jpg"
              alt=""
            />
          </Slider>

          <div className="gig-content">
            <h2>About this Gig</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              sit qui error. Explicabo ipsa sint numquam eligendi adipisci
              repellendus expedita itaque! Aliquid nam quibusdam cupiditate, non
              quam error ducimus at illo, ullam ut reprehenderit quasi amet
              maiores eos numquam libero et. Ad quaerat libero iusto!
              Consequuntur aliquam aliquid incidunt officia. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Ipsa labore explicabo
              mollitia nulla temporibus fugit nesciunt, harum aspernatur sed?
              Facere eos et, dicta rem facilis accusantium aliquam fuga ducimus
              delectus.
            </p>
          </div>

          <div className="seller">
            <h2>About the Seller</h2>

            <div className="info">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG"
                alt=""
              />

              <p>John Doe</p>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <button>Contact Me</button>
            </div>

            <div className="seller-details">
              <div className="left">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>

                <div className="item">
                  <span className="title">Avg. Response Time</span>
                  <span className="desc">4 Hours</span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 Day</span>
                </div>
              </div>

              <div className="right">
                <div className="item">
                  <span className="title">Member Since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
            </div>
            <hr />

            <p>
              My name is Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Id beatae quam velit culpa corrupti reprehenderit et vel
              amet adipisci hic.
            </p>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>

            <div className="review">
              <div className="info">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG"
                  alt=""
                />

                <div className="name">
                  <p>John Doe</p>
                  <p>United States</p>
                </div>

                <div className="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>

              <div className="content">
                <p>
                  I create one-of-a-kind AI images using Midjourney. I've put in
                  countless hours to effectively master this software, and
                  that's why I'm the ideal designer for your project. You no
                  longer need to spend hours searching for the right image or
                  try to make a design from scratch. With your words, I am able
                  to generate a wide variety of styles, themes, and colour
                  palettes that reflect your idea of a perfect masterpiece. You
                  get to be the artist - no experience necessary! Whether it's
                  for a business presentation, social media content, or a
                  personal project, my platform offers a quick and easy solution
                  to all your art needs. Upgrade your creativity with my
                  services. Send me a message anytime! I'm here
                </p>

                <h3>
                  Helpful? <i class="fa-regular fa-thumbs-up"></i> Yes{" "}
                  <i class="fa-regular fa-thumbs-down"></i> No{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="right-box">
            <div className="top">
              <h3>1 AI generated Image</h3>
              <p>$ 59.99</p>
            </div>

            <div className="middle">
              <p>
                I will create a high quality image based on the description you
                give
              </p>
            </div>

            <div className="bottom">
              <div className="timer">
                <p>2 Days Delivery</p>
                <p>3 Revisions</p>
              </div>

              <div className="checks">
                <div>
                  <i class="fa-solid fa-check"></i>
                  <span>Prompt Writing</span>
                </div>
                <div>
                  <i class="fa-solid fa-check"></i>
                  <span>Image Upscaling</span>
                </div>
                <div>
                  <i class="fa-solid fa-check"></i>
                  <span>ArtWork Delivey</span>
                </div>
                <div>
                  <i class="fa-solid fa-check"></i>
                  <span>Additional Design</span>
                </div>
                <div>
                  <i class="fa-solid fa-check"></i>
                  <span>Prompt Writing</span>
                </div>
              </div>
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gig;
