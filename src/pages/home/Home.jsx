import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import Trustedby from "../../components/Trustedby/Trustedby";
import Slide from "../../components/Slider/Slide";
import CatCaard from "../../components/catCard/CatCaard";
import ProjectCard from "../../components/projectCard/ProjectCard";

import cards from "../../data";

import { projects } from "../../data";




function Home() {
  return (
    <div>
      <Featured />
      <Trustedby />
      <Slide slidesToShow={4} arrowsScroll={1}>
        {cards.map((card) => (
          <CatCaard key={card.id} item={card} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A Whole world of freelance Talent at your fingertips </h1>
            <div className="item-content">
              <p>
                <i class="fa-regular fa-circle-check"></i>The best for every
                budget
              </p>
              <p>
                Find the high quality service at every price point.Nol hourly
                rates just project based pricing
              </p>
            </div>
            <div className="item-content">
              <p>
                <i class="fa-regular fa-circle-check"></i>The best for every
                budget
              </p>
              <p>
                Find the high quality service at every price point.Nol hourly
                rates just project based pricing
              </p>
            </div>
            <div className="item-content">
              <p>
                <i class="fa-regular fa-circle-check"></i>The best for every
                budget
              </p>
              <p>
                Find the high quality service at every price point.Nol hourly
                rates just project based pricing
              </p>
            </div>
            <div className="item-content">
              <p>
                <i class="fa-regular fa-circle-check"></i>The best for every
                budget
              </p>
              <p>
                Find the high quality service at every price point.Nol hourly
                rates just project based pricing
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Feature 2 */}


      <div className="features-2">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <p>A business solution designed for <i>teams</i></p>
            <div className="item-content">
              <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
              <p>
                <i class="fa-regular fa-circle-check"></i>Connect to freelancers with proven business experience
              </p>
              <p>
                Get matched with the perfect talent by a customer success manager
              </p>
            </div>
            <div className="item-content">
              <p>
                <i class="fa-regular fa-circle-check"></i>The best for every
                budget
              </p>
            </div>
            <div className="item-content">
              <p>
                <i class="fa-regular fa-circle-check"></i>The best for every
                budget
              </p>
            </div>
            <div className="item-content">
              <p>
                <i class="fa-regular fa-circle-check"></i>Manage teamwork and boost productivity with one powerful workspace

              </p>
            </div>

            <button className="btn">Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>


      {/* Products Slider */}

      <Slide slidesToShow={3} arrowsScroll={1}>
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>
  
    </div>
  );
}

export default Home;
