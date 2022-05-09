import ballLightGreen from "../images/ball-light-green.png";
import ballBeige from "../images/ball-beige.png";
import ballBlue from "../images/ball-blue.png";
import ballPink from "../images/ball-pink.png";
import ballPurple from "../images/ball-purple.png";
import ballYellow from "../images/ball-yellow.png";
import Bao from "../images/bao.png";
import Frankenstein from "../images/frankenstein.png";
import Hoodie from "../images/hoodie.png";
import StrawHat from "../images/straw-hat.png";
import Ballsstyles from "./Ballsstyles";
export default function IconsWrapper() {

    return(
        <section className="icons__wrapper">

        <h1 className="title">
            wildwarz <br />
            cards
        </h1>

            {/* balls images started */}
            <div className="icon__wrapper lightgreenBallContainer" >
                <img src={ballLightGreen} className="lightgreenImage"/>
            </div>
            <div className="icon__wrapper beigeBallContainer">
                <img src={ballBeige} className= "beigeBallImage"/>
            </div>
            <div className="icon__wrapper blueBallContainer">
                <img src={ballBlue} className="blueBallImage"/>
            </div>
            <div className="icon__wrapper ballPinkContainer" >
                <img src={ballPink} className = "ballPinkImage"/>
            </div>
            <div className="icon__wrapper yellowBallContainer">
                <img src={ballYellow} className="yellowBallImage"/>
            </div>
            <div className="icon__wrapper purpleBallContainer">
                <img src={ballPurple} className="purpleBallImage"/>
            </div>

            {/* balls images ended */}
            {/* animated imaged started */}
        <div className="icon__wrapper baoContainer">
            <img src={Bao} className="baoImage" />
        </div>
        <div className="icon__wrapper frankensteinContainer">
            <img src={Frankenstein} className="frankensteinImage" />
        </div>
        <div className="icon__wrapper hoodieContainer">
            <img src={Hoodie} className="hoodie-image" />
        </div>
        <div className="icon__wrapper strawhatContainer">
            <img src={StrawHat} className="strawhatImage" />
        </div>
        
            {/* animated images ended */}
        </section>
    )
}