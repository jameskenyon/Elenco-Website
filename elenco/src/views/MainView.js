import React from "react";

// media
import logo from "../media/logo.png";
import appStoreDownload from "../media/AppStoreDownload.svg";
import mainPreview from "../media/mainPreview.png";

// styles and components
import "./MainView.css";

export default class MainView extends React.Component {
  render() {
    return (
      <div className="View MainView">
        <div id="spacerOne"></div>
        <div id="mainViewContainer">
          <img id="mainPreview" src={mainPreview} alt="Main app preview."></img>
          <div id="appInformationView">
            <div className="logoContainer">
              <img id="mainLogoImage" src={logo} alt="Logo image."></img>
              <div id="logoText">
                Elenco
                <div id="priceText">Free</div>
              </div>
            </div>
            <div id="mainInformationText" className="mainText">
              We find ourselves shopping for food countless times in our lives.
              Whether it's keeping track of what you need to buy or
              intelligently coming up with new recipes to spice up your weekly
              shop, <b>Elenco has you covered.</b>
            </div>
            <img
              id="appStoreDownload"
              src={appStoreDownload}
              alt="App store image."
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
