import "./moonmap.css";
import MoonRock from "./assets/moonrock.svg";
import Rockphase from "./assets/rockphase.png";
import ArrorPhase from "./assets/polygon.svg";

const MoonMap = () => {
  return (
    <div>
      <div>
        <div className="moon-map-container">
          <div className="moon-map-heading">
            <h1>Roadmap</h1>
          </div>
          {/* <div className="moon-image"> <img src={MoonRock} alt="moon-map-image 1"/></div> */}
          <div className="all-phase-table">
          <div className="all-phase">
            
            <div className="phase-one">
              <h2>Phase 1</h2>
              <div className="rockphase1">
                <img src={Rockphase} alt="phase one" />
                <div className="line-border"> </div>
              </div>
            </div>
            <div className="phase-one-table">
              <div className="table-heading">
                <img src={ArrorPhase} alt="the-pointer" />
                <h1>Launch, Community Building and Listing</h1>
              </div>

              <div className="phase-discription">
                <h5>- Establishing the website and social community channels</h5>
                <h5>- Whitepaper developing</h5>
                <h5>- Launch on Solana</h5>
                <h5>- 7 high end marketing campaigns to attract potential users and investors</h5>
                <h5>- Hosting AMAs and giveaways to engage with our community.</h5>
                <h5>- Smart contract implementing and conducting a contract audit for security and reliability.</h5>
                <h5>- Pinksale Pre-sale</h5>
                <h5>- Tier 2 CEX Listings</h5>
              </div>
            </div>
            
          </div>
          <div className="all-phase">
            
            <div className="phase-one">
              <h2>Phase 2</h2>
              <div className="rockphase1">
                <img src={Rockphase} alt="phase one" />
              </div>
            </div>
            <div className="phase-one-table">
              <div className="table-heading">
                <img src={ArrorPhase} alt="the-pointer" />
                <h1>Ecosystem Expansion</h1>
              </div>

              <div className="phase-discription">
                <h5>- 11 high end marketing campaigns to attract potential users and investors.</h5>
                <h5>- Whitepaper developing</h5>
                <h5>- Launch on Solana</h5>
                <h5>- Collaborating with 100+ Tier 1, 200+ Tier 2 and 300+ Tier 3 KOLs in the Crypto Space from<br/> every demographic.</h5>
                <h5>- Establishing partnerships with 20+ meme projects.</h5>
                <h5>- Smart contract implementing and conducting a contract audit for security and reliability.</h5>
                <h5>- Pinksale Pre-sale</h5>
                <h5>- Tier 2 CEX Listings</h5>
              </div>
            </div>
            
          </div>
            
          <div className="all-phase">
            
            <div className="phase-one">
              <h2>Phase 3</h2>
              <div className="rockphase1">
                <img src={Rockphase} alt="phase one" />
              </div>
            </div>
            <div className="phase-one-table">
              <div className="table-heading">
                <img src={ArrorPhase} alt="the-pointer" />
                <h1>Global Adoption</h1>
              </div>

              <div className="phase-discription">
                <h5>- Expanding Pump100x token's global presence.</h5>
                <h5>- Establishing 200+ localized communities.</h5>
                <h5>- Partnering with renowned global 100+ KOLs and media to cultivate trust and solidify Pump100x token's standing in the international arena.</h5>
                <h5>- Establishing partnerships with 50+ meme projects.</h5>
                <h5>- 50+ integrations across Gaming, NFT, DeFi, Developer, Exchange, Wallet, Payment and Socials.</h5>
                <h5>- Improving User Experience and Token Utility.</h5>
                <h5>- Community events, contests, and giveaways with a huge prize Pump100x.</h5>
                <h5>- Launch on Ethereum</h5>
              </div>
            </div>
            
          </div>

          <div className="all-phase">
            
            <div className="phase-four">
              <h2>Phase 4</h2>
              <div className="rockphase1">
                <img src={Rockphase} alt="phase one" />
              </div>
            </div>
            <div className="phase-four-table">
              <div className="table-heading-four">
                <img src={ArrorPhase} alt="the-pointer" />
                <h6>It’s time to Rule the Meme World</h6>
              </div>

            </div>
            
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default MoonMap;
