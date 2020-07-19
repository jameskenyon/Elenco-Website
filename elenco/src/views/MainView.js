import React from "react";

// media
import logo from "../media/logo.png";
import appStoreDownload from "../media/AppStoreDownload.svg";
import mainPreview from "../media/mainPreview.png";

// styles and components
import "./MainView.css";
import FeatureView from "./components/FeatureView";

export default class MainView extends React.Component {
  render() {
    return (
      <div className="View MainView">
        <div id="spacerOne"></div>
        <div id="mainViewContainer">
          <img id="mainPreview" src={mainPreview} alt="Main app preview."></img>
          <div id="appInformationView">
            <div className="logoContainer">
              <img id="mainLogoImage" src={logo} alt="Logo."></img>
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
            <div id="downloadContainer">
              <img
                id="appStoreDownload"
                src={appStoreDownload}
                alt="App store."
              ></img>
            </div>
          </div>
        </div>
        <div id="spacerTwo"></div>
        <div id="featureViewContainer">
          <div id="featureViews">
            <FeatureView
              title="Smart Search"
              info="Find and add ingredients quickly to your shopping list. Remembers past ingredients and favourites for speedy addition."
            />
            <FeatureView
              title="Multiple Lists"
              info="Create a list for any occasion. There are no limits on the number of lists you can create."
            />
            <FeatureView
              title="Quick Quantities"
              info="Elenco automatically detects the quantity of the ingredient that you are trying to add. For example '4 Carrots'."
            />
            <FeatureView
              title="List Actions"
              info="Complete actions on your list as a whole, such as deletion, or sort your list by name, aisle or list."
            />
            <FeatureView
              title="List Share"
              info="Share your list with anyone in the world, or even between your own devices, with the list share feature."
            />
            <FeatureView
              title="Recipe Helper"
              info="Need to find recipes with the ingredient you have in your list? Elenco can suggest recipes that contain ingredients you have in a list."
            />
            <FeatureView
              title="AI Suggestions"
              info="Elenco stores ingredients you have added in the past to help suggest ingredients that you might like to try."
            />
            <FeatureView
              title="Recipe Creation"
              info="Add all of the ingredients in a recipe to your list instantly. Create your own recipes to make it even easier."
            />
            <FeatureView
              title="Essentials List"
              info="Adding your essentials to the 'Essentials' list lets you add them to any of your other lists in the touch of a button."
            />
          </div>
        </div>
        <div id="footerView" className="bodyText">
          By <b id="boldName">James Kenyon</b> and{" "}
          <b id="boldName">James Bernhardt</b>
        </div>
      </div>
    );
  }
}
