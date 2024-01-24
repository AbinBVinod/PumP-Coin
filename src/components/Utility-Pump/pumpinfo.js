import "./pumpinfo.css"
import Infobox1 from "./assets/infobox1.png"

const PumpInfo = () => {
  return(
    <>
     <div className="pump-info-container">
        <div className="pump-info-heading">
             <h1>Token Utility</h1>
        </div>
        <div className="pump-bento-boxes">
        <div className="pump-box-one-all">
           <div className="pump-box-one">
               <div className="pump-info-img">
                    <img src={Infobox1} alt="pump-one"/>
               </div>
               <div className="pump-info-box-info">
                <h1>Pump100x Utility</h1>
                <p>Stake your Pump100x and laugh your way<br/>to financial freedom. From governance to<br/> staking rewards, your Pump100x tokens<br/>are your key to the future of DeFi</p>
               </div>
           </div>
           <div className="pump-box-two">
               <div className="pump-info-img">
                    <img src={Infobox1} alt="pump-one"/>
               </div>
               <div className="pump-info-box-info">
                <h1>Memes with Benefits</h1>
                <p>Unleash your inner artist, create dank<br/>memes, and win big in our community<br/> staking rewards, your Pump100x tokens<br/>contests</p>
               </div>
           </div>
           <div className="pump-box-three">
               <div className="pump-info-img">
                    <img src={Infobox1} alt="pump-one"/>
               </div>
               <div className="pump-info-box-info">
                <h1>Decentralized Dreams</h1>
                <p>coin the Pump100x DAO, vote on proposals,<br/>and shape the future of meme finance</p>
               </div>
           </div>
        </div>
        <div className="down-bento-box-pump"> 
        <div className="pump-box-one-down">
               <div className="pump-info-img">
                    <img src={Infobox1} alt="pump-one"/>
               </div>
               <div className="pump-info-box-info">
                <h1>Pump It Together</h1>
                <p>Partnerships, collaborations, and moony<br/>missions galore! Together, we'll meme<br/>our way to the top</p>
               </div>
           </div>
           <div className="pump-box-two-down">
               <div className="pump-info-img">
                    <img src={Infobox1} alt="pump-one"/>
               </div>
               <div className="pump-info-box-info">
                <h1>Burn to Earn</h1>
                <p>Pump100x boosts value by auto-burning<br/>each transaction, reducing supply to<br/>enhance investment potential</p>
               </div>
           </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default PumpInfo;