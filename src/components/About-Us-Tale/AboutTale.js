import "./AboutTale.css";
import Rockspace from "./assets/spacerock.svg";
import TaleDogs from "./assets/taleabout.png"
import MemeLogo from "./assets/memelogo.png"

const AboutTale = () => {
  return (
    <div>
       <div className="sapcerockimg"> <img src={Rockspace}  alt="rock-space" /></div>
      <div className="about-us-container">
        <div className="about-us-contant">
          <h4>About</h4>
          <h1>The Epic Tale of <img src={MemeLogo} alt="logo meme"/></h1>
          <p>
            {" "}
            Pump100x, born from{" "}
            <span>a Dogefather's prophecy and a Shiba's wink, </span> is not
            just a coin but a meme revolution, championed by characters like
            Bonk and Pepe the Frog. This convergence of memes and skepticism
            fuels Pump100x, offering a voice to the underdog. It's a movement
            where imagination reigns, powered by memes, Shiba winks, and a
            spirit of defiance{" "}
          </p>
          <h3>
              {" "}
              Welcome to the world of Pump100x - where every wink and bonk
              counts!
            </h3>{" "}
        </div>
        <div className="image-for-tale"><img src={TaleDogs} alt="the-tale-img"/></div>
      </div>
    </div>
  );
};

export default AboutTale;
