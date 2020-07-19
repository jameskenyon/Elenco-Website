import React from "react";

// media

// styles and components
import "./components.css";

export default class FeatureView extends React.Component {
  render() {
    return (
      <div id="FeatureView">
        <div id="titleView" className="titleText">
          <div>{this.props.title}</div>
        </div>
        <div id="featureInformationView" className="bodyText">
          {this.props.info}
        </div>
      </div>
    );
  }
}
