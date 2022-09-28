import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="pesquisar no tucan" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Em alta</h2>

        <TwitterTweetEmbed tweetId={"164754503126626304"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="dorapeac"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://somostera.com/"}
          options={{ text: "#reactjs ", via: "TERA" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
