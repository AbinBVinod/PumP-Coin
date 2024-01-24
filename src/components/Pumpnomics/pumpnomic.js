import "./pumpnomic.css";
import MemeLogo from "./assets/memelogo.png";
import Cex from "./assets/cex.svg";
import Info from "./assets/info.svg";



const PumpNomic = () => {
  return (
    <>
      <div>
        <div className="pumpnomic-container">
          <div className="pumpnomic-heading">
            <h1>Tokenomics</h1>
          </div>

          <div className="token-mi-aligh">
            <div className="the-svg-img">
              <img src={MemeLogo} alt="the logo middle" /> 
             
            
            </div>
             
            <div className="token-details">
              <div className="heading-for-nomic-box">
                <div className="data-text">
                  Total Allocation
                  <span>
                    <h1>100%</h1>{" "}
                  </span>{" "}
                </div>
                <div className="data-numbers">210,000,000,000</div>
              </div>

              <div className="other-data-token">
                <div className="Border-line-data">
                  <div className="cex-and-dex">
                    <div className="data-in-aligh">
                      <img src={Cex} alt="cex & dex" />
                      <div className="data-text-cex">CEX & DEX Listing</div>
                      <div className="data-in-box">
                        {" "}
                        <h1>50%</h1>
                      </div>
                    </div>
                    <div className="both-data-info">
                      <div className="data-numbers-all">105,000,000,000</div>
                      <div className="infobox-hover">
                        <img src={Info} alt="infologo" />
                        <div className="info-box">
                          5% upon DEX/CEX Listing Remaining Allocation Lockup -
                          3 months Vesting - 12 months
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="the-border-nomic"></div>
                </div>
                <div className="Border-line-data">
                  <div className="cex-and-dex">
                    <div className="data-in-aligh">
                      <img src={Cex} alt="cex & dex" />
                      <div className="data-text-cex">Treasury </div>
                      <div className="data-in-box">
                        {" "}
                        <h1>20%</h1>
                      </div>
                    </div>
                    <div className="both-data-info">
                      <div className="data-numbers-all">42,000,000,000</div>
                      <div className="infobox-hover">
                        <img src={Info} alt="infologo" />
                        <div className="info-box">
                          5% upon DEX/CEX Listing Remaining Allocation Lockup -
                          3 months Vesting - 12 months
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="the-border-nomic"></div>
                </div>
                <div className="Border-line-data">
                  <div className="cex-and-dex">
                    <div className="data-in-aligh">
                      <img src={Cex} alt="cex & dex" />
                      <div className="data-text-cex">Pump Drop </div>
                      <div className="data-in-box">
                        {" "}
                        <h1>10%</h1>
                      </div>
                    </div>
                    <div className="both-data-info">
                      <div className="data-numbers-all">21,000,000,000</div>
                      <div className="infobox-hover">
                        <img src={Info} alt="infologo" />
                        <div className="info-box">
                          5% upon DEX/CEX Listing Remaining Allocation Lockup -
                          3 months Vesting - 12 months
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="the-border-nomic"></div>
                </div>
                <div className="Border-line-data">
                  <div className="cex-and-dex">
                    <div className="data-in-aligh">
                      <img src={Cex} alt="cex & dex" />
                      <div className="data-text-cex">Devs </div>
                      <div className="data-in-box">
                        {" "}
                        <h1>10%</h1>
                      </div>
                    </div>
                    <div className="both-data-info">
                      <div className="data-numbers-all">21,000,000,000</div>
                      <div className="infobox-hover">
                        <img src={Info} alt="infologo" />
                        <div className="info-box">
                          5% upon DEX/CEX Listing Remaining Allocation Lockup -
                          3 months Vesting - 12 months
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="the-border-nomic"></div>
                </div>
                <div className="Border-line-data">
                  <div className="cex-and-dex">
                    <div className="data-in-aligh">
                      <img src={Cex} alt="cex & dex" />
                      <div className="data-text-cex">KOL Round </div>
                      <div className="data-in-box">
                        {" "}
                        <h1>5%</h1>
                      </div>
                    </div>
                    <div className="both-data-info">
                      <div className="data-numbers-all">11,500,000,000</div>
                      <div className="infobox-hover">
                        <img src={Info} alt="infologo" />
                        <div className="info-box">
                          5% upon DEX/CEX Listing Remaining Allocation Lockup -
                          3 months Vesting - 12 months
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="the-border-nomic"></div>
                </div>

                <div className="Border-line-data">
                  <div className="cex-and-dex">
                    <div className="data-in-aligh">
                      <img src={Cex} alt="cex & dex" />
                      <div className="data-text-cex">Public Sale</div>
                      <div className="data-in-box">
                        {" "}
                        <h1>5%</h1>
                      </div>
                    </div>
                    <div className="both-data-info">
                      <div className="data-numbers-all">11,500,000,000</div>
                      <div className="infobox-hover">
                        <img src={Info} alt="infologo" />
                        <div className="info-box">
                          5% upon DEX/CEX Listing Remaining Allocation Lockup -
                          3 months Vesting - 12 months
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="the-border-nomic"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PumpNomic;
