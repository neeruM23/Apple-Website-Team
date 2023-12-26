import BannerImg from "../../../assets/banner-img.png";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Big Sale</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            inventore nemo neque, velit autem soluta quisquam culpa obcaecati
            nisi corrupti?
          </p>
          <div className="ctas">
            <button className="banner-cta">Read More</button>
            <button className="banner-cta v2">Shop Now</button>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner;
