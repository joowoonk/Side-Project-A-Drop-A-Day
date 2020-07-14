import React from "react";
import "./update.styles.scss";
const Update = () => {
  return (
    <div className="update">
      <div className="list">
        <h1>UPDATES:</h1>
        <h2>V.1.0.7 July 11th, 2020</h2>
        <ul>
          <li>
            Made some comments and tiles are now not that far to each other
          </li>
        </ul>
        <h2>V.1.0.6 July 9th, 2020</h2>
        <ul>
          <li>
            Logo is no longer being shown on mobile screen and dark mode is
            available under the top tab menu.
          </li>
          <li>Way more responsive :)</li>
        </ul>
        <h2>V.1.0.5, July 4st, 2020</h2>
        <ul>
          <li>
            First of all, Happy the Fourth of July! Hope you have a good time
            with your family and watching fireworks! Make sure to stay safe! All
            the eaten tomatoes counts will be RESET to ZERO every midnight on
            Pacific Time Zone standard. So, you do not have to bother yourself
            to reset each one of them!
          </li>
          <li>Reset buttons are no longer working.</li>
        </ul>
        <h2>V.1.0.4, July 1st, 2020</h2>
        <ul>
          <li>
            Made everything more responsive, tested on Iphone X screen, and it's
            working pretty fine, except the Youtube wont auto play the music
            while focusing and break time are on.
          </li>
        </ul>
        <h2>V.1.0.3, June 28th, 2020</h2>
        <ul>
          <li>Made top menu bar to be little more responsive!</li>
        </ul>
        <h2>V.1.0.2, June 27th, 2020</h2>
        <ul>
          <li>
            Happy to announce that this project is now using PostgreSQL to hold
            our data
          </li>
          <li>Navbar menus are disabled while a user is focusing/resting</li>
          <li>
            Timer's component is now more steady, gives you the total of time
            you spent focusing time.
          </li>
        </ul>
        <h2>V.1.0.1, June 23rd, 2020</h2>
        <ul>
          <li>
            Just updated another feature that plays lofi music as background
            music automatically while you are staying focused or taking a break
            time. When time is up, sound will go off automatically. You may be
            also mute if you do not want to hear the music, since people have
            different way in focusing!.{" "}
          </li>
        </ul>
        <h2>V.1.0.0, June 22nd, 2020</h2>
        <ul>
          <li>
            Happy to announce that A Drop A Day is now launched, I know there
            will be lots of features things to be added, but so pleasant to show
            my first side project!{" "}
          </li>
          <li>If you are dark mode lover, click the Tomatoe logo on top!</li>
        </ul>
      </div>
    </div>
  );
};

export default Update;
