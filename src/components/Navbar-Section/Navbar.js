import "./Navbar.css";
import MemeLogo from "./assets/memelogo.png"

const Navbar = () => {
  return (
    <div>
      <div className="navbar-box">
          <div className="pump-title">
            <img src={MemeLogo} alt="pump-logo-nav"/> Pump
          </div>

          <div className="navbar-links">
           <h4>Home</h4>
           <h4>About us</h4>
           <h4>How to Buy</h4>
           <h4>Tokenomics</h4>
           <h4>Roadmap</h4>
          </div>

           <div className="buy-now-link">
              <button>
                <h4>BUY NOW</h4>
                </button>
          </div>
      </div>
    </div>
  );
};
export default Navbar;
