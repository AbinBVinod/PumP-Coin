import "./teamabout.css";
import MemeLogo from "./assets/memelogo.png"
import CEO from "./assets/CEO.png"
import COO from "./assets/COO.png"
import CTO from "./assets/CTO.png"
import CMO from "./assets/CMO.png"
import Dev1 from "./assets/SmartContract.png"
import Dev2 from "./assets/UIUX.png"
import Dev3 from "./assets/Cuybercen.png"


const TeamAbout = () => {
  return (
    <>
      <div>
        <div className="Team-all-container">
          <div className="Team-all-heading">
            <h1>Meet the <img src={MemeLogo} alt="memo-logo"/> Crew</h1>
          </div>

          <div className="table-one-team-aligh">
            <div className="Team-table-one">
              <div className="Team-table-data">
                <div className="image-text">
                  <img
                    className="team-one-img"
                    src={CEO}
                    alt="team guy one"
                  />
                  <div className="text-box">
                    <h1>CEO</h1>
                  </div>
                </div>
                <div className="table-one-text">
                    <h1>MAGNUS</h1>
                    <h3>Code Whisperer</h3>
                    <p>MIT graduate, former engineer<br/> at Meta, now shaping the future<br/> of DeFi</p>
                </div>
              </div>
              <div className="Team-table-data">
                <div className="image-text">
                  <img
                    className="team-one-img"
                    src={COO}
                    alt="team guy one"
                  />
                  <div className="text-box">
                    <h1>COO</h1>
                  </div>
                </div>
                <div className="table-one-text">
                    <h1>LUKE</h1>
                    <h3>Pixel Architect</h3>
                    <p>Stanford CS whiz, built the<br/> visual language of leading NFT<br/>projects</p>
                </div>
              </div>
              <div className="Team-table-data">
                <div className="image-text">
                  <img
                    className="team-one-img"
                    src={CTO}
                    alt="team guy one"
                  />
                  <div className="text-box">
                    <h1>CTO</h1>
                  </div>
                </div>
                <div className="table-one-text">
                    <h1>ARTHUR</h1>
                    <h3>Chain Strategist</h3>
                    <p>Wharton MBA, ex-Goldman Sachs<br/>analyst, plotting Pump100x's<br/>meteoric rise</p>
                </div>
              </div>
              <div className="Team-table-data">
                <div className="image-text">
                  <img
                    className="team-one-img"
                    src={CMO}
                    alt="team guy one"
                  />
                  <div className="text-box">
                    <h1>CMO</h1>
                  </div>
                </div>
                <div className="table-one-text">
                    <h1>CYRUS</h1>
                    <h3>Meme Weaver</h3>
                    <p>Oxford Linguistics PhD, viral<br/>meme creator, crafting the<br/>narrative of Pump100x</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Team-dev-aligh">
            <div className="team-dev-box">
                 <div className="team-box-1-all">
                <div className="team-box-1">
                    <div className="box-team-one-all">
                        <div className="box-dev-img">
                            <img src={Dev1} alt="dev guy one" />
                        </div>
                        <div className="box-dev-text"> 
                            <h1>Smart Contract Sorcerer</h1>
                            <p>Imperial College London computer scientist,<br/> conjuring secure and innovative code</p>
                        </div>
                    </div>
                </div>
                <div className="team-box-1">
                    <div className="box-team-one-all">
                        <div className="box-dev-img">
                            <img src={Dev2} alt="dev guy one" />
                        </div>
                        <div className="box-dev-text"> 
                            <h1>UX Alchemist</h1>
                            <p>Carnegie Mellon design master, crafting,<br/> cfrictionless experiences for Pump100x <br/>users</p>
                        </div>
                    </div>
                </div>
                <div className="team-box-1">
                    <div className="box-team-one-all">
                        <div className="box-dev-img">
                            <img src={Dev3} alt="dev guy one" />
                        </div>
                        <div className="box-dev-text"> 
                            <h1>CyberSentinel</h1>
                            <p>Edinburgh cybersecurity expert, shielding<br/> Pump100x from digital threats, predicting<br/> and mitigating potential pitfalls</p>
                        </div>
                    </div>
                </div>
                </div>
                {/* <div className="team-dev-box-two">
                <div className="team-dev-two">
                    <div className="team-box-two-all">
                        <div className="team-box-two-img"> 
                         <img src={Devimg} alt="dev guy one" />
                        </div>
                        <div className="team-box-two-text"> 
                         <h1>CyberSentinel</h1>
                         <p>Edinburgh cybersecurity expert, shielding<br/> Pump100x from digital threats, predicting<br/> and mitigating potential pitfalls</p>
                        </div>
                    </div>
                </div>
                <div className="team-dev-two">
                    <div className="team-box-two-all">
                        <div className="team-box-two-img-two"> 
                         <img src={Devimg} alt="dev guy one" />
                        </div>
                        <div className="team-box-two-text"> 
                         <h1>Compliance Crusader</h1>
                         <p>Harvard Law graduate, navigating the ever-<br/>evolving regulatory landscape</p>
                        </div>
                    </div>
                </div>
                <div className="team-dev-two">
                    <div className="team-box-two-all">
                        <div className="team-box-two-img-three"> 
                         <img src={Devimg} alt="dev guy one" />
                        </div>
                        <div className="team-box-two-text"> 
                         <h1>Data Oracle</h1>
                         <p>Imperial College London statistics whiz,<br/>extracting insights from the Pump100x<br/>ecosystem</p>
                        </div>
                    </div>
                </div>
             
             </div> */}
            </div>
            
          </div>

        </div>
        <div className="bottom-tag">
        © 2023 - 2024 PUMP100X, Inc </div>
      </div>
    </>
  );
};
export default TeamAbout;
