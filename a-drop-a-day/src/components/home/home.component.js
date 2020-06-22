import React from "react";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="introduction">
      <h1>Why I built this website:</h1>
      <p>
        {" "}
        As you know there are tasks to finish in a limited amount of time and
        also we'd agree that time is gold. Most people would also agree that the
        more we stay focused on one thing, we finish stronger and faster.
        However, it's also true that we tend to procrastinate even if we have
        tasks in front of us. Recently, I've been using a technique called&nbsp;
        <a
          style={{ color: "tomato" }}
          href="https://francescocirillo.com/pages/pomodoro-technique"
          target="_blank"
        >
          the Pomodoro Technique
        </a>
        &nbsp;whenever I need to focus. Although this method has been immensly
        helpful for me to stay focused and stay away from procrastinating, I
        haven't found a website where I can break down on things I was working
        on.
      </p>
      <p>
        For an example, let's say I have some tasks to do on different things.
        Such as:
        <ul>
          <li>Continue writing an essay for my Philosophy of Science class</li>
          <li>
            Solving algorithm problems on Leetcode, two easy problems and one
            medium level problem
          </li>
          <li>
            Read <span style={{ fontStyle: "italic" }}>the Republic</span> by
            Plato
          </li>
        </ul>
        As the to-do list shows above, I implmeneted a feature where I can set
        how much time I will spend a day for each task. So the list would look
        like this.
        <ul>
          <li>
            Continue writing an essay for my Philosophy of Science class -->{" "}
            <span style={{ color: "tomato" }}>4 tomatoes </span>a day
          </li>
          <li>
            Solving algorithm problems on Leetcode, two easy problems and one
            medium level probelm -->
            <span style={{ color: "tomato" }}> 4 tomatoes </span> a day
          </li>
          <li>
            Read <span style={{ fontStyle: "italic" }}>the Republic</span> by
            Plato --> <span style={{ color: "tomato" }}> 2 tomatoes </span>a day
          </li>
        </ul>
        Wait, what's does it mean by tomatoes? Here's the answer, each tomato
        will be a time tracker. One tomato will be 25 mintues. Taking a short 5
        minute break time after a tomato would be recommended for our brains.{" "}
        <a
          href="https://www.linkedin.com/in/joo-woon-kang-2515ab1a2/"
          target="_blank"
        >
          Taking a break time can be helfup for us
        </a>{" "}
        to think more creative way. After a first four tomatoes, taking a long
        15 minutes break time is also recommended. Once you logged in this
        website, you will be able to make a to-do list with numbers of tomatoes
        you wish to work on.
      </p>
      <h2> See this image as below:</h2>
      <p>
        <img
          src="todo-list-with-tomatoes.png"
          alt="Todo-list-with-tomatoes"
          width="90%"
          height="1000vh"
          className="image"
        ></img>
        You can create your account for free anytime, click{" "}
        <a
          href="https://side-project-a-drop-a-day.vercel.app/signup"
          target="_blank"
        >
          here
        </a>{" "}
        to sign up!
      </p>
      <p>
        I hope this website would be very helplful for you to stay focused and
        keep tracking your tasks. I'll do my best to keep updating more features
        as days go whenever I have free time. If you would like to contact me
        via LinkedIn, you can click{" "}
        <a
          href="https://www.linkedin.com/in/joo-woon-kang-2515ab1a2/"
          target="_blank"
        >
          here
        </a>
        . I'd love to hear your feedback and stay connected. Also if you like to
        see this side project's repo on github, you can click&nbsp;
        <a
          href="https://github.com/joowoonk/Side-Project-A-Drop-A-Day"
          target="_blank"
        >
          here.
        </a>
      </p>

      <h1>What's The Pomodoro Technique about?</h1>
      <p>
        It's one of the time management methods out there that's widely used.
        You can click&nbsp;
        <a
          href="https://francescocirillo.com/pages/pomodoro-technique"
          target="_blank"
        >
          here
        </a>
        &nbsp;to see the detail or if you want to see what studies were done
        regarding this technique, I'd recommend you to try watch this video. In
        this video, Barbara Oakley who is a professor of Engineering at Oakland
        University and gave a great speech at TEDx about how we can learn to
        learn:
        <center>
          {" "}
          <iframe
            width="560"
            height="315"
            className="video"
            src="https://www.youtube.com/embed/O96fE1E-rf8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </center>
        <h2>Lastly...</h2>
        As we work on things daily basis, I believe there is nothing we cannot
        master. I'm a stronger believer in compound interest where doing one
        small thing a day will grow us expentially. I hope you dont give up on
        whatever you are passionated about. Thank you again for taking your time
        using this website. Oh, try to click tomato logo on top menu if you want
        dark-mode on this website.
      </p>
    </div>
  );
};

export default Home;
