import React from "react";
import "./about.styles.scss";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

const about = () => {
  return (
    <div className="twitter">
      <div
        class="github-card"
        data-github="joowoonk"
        data-width="400"
        data-height="317"
        data-theme="medium"
      ></div>

      <h1>Follow my twitter</h1>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="johnwhoprograms"
        theme="dark"
        options={{ height: 500, width: 700, borderRadius: "30px" }}
      />
    </div>
  );
};

export default about;
