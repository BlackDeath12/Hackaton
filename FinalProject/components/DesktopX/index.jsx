import React, { useEffect } from "react";
import WidgetWrapper from "../WidgetWrapper";
import Frame37 from "../Frame37";
import Frame34 from "../Frame34";
import Frame29 from "../Frame29";
import Munchai from "../Munchai";
import "./DesktopX.css";
import axios from "axios";
import { useState } from "react";
import { Configuration, OpenAIApi } from 'openai';



function DesktopX(props) {
  const[prompt, setPrompt] = useState("");
  const[response, setResponse] = useState("");
  const[choices, setChoices] = useState([{}]);
  const openai = new OpenAIApi(new Configuration({apiKey: process.env.REACT_APP_API_KEY}))

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    minHeight: "200vh",
    paddingBottom: "50px",
  };

  const textStyle = {
    textAlign: "center",
    width: "1000%",
    margin: "0 auto",
    fontFamily: "'Pacifico', cursive",
  };

  const handleSubmit = async() => {
    
    console.log(prompt);
    const result = await openai.createChatCompletion(
      {model:'gpt-3.5-turbo',
      max_tokens: 512,
      temperature: 0,
      messages: [{role: "user", content: `Give me recipe with with a name ${prompt}`}],
    })
    console.log(result.data.choices[0].text); 
    setChoices([...result.data.choices]);
  };
  const {
    iconSearch1,
    enterYourIngredients,
    newHealthyRecipesAwait,
    pngtreepinkPanKitchenSuppliesKitche,
    screenshot202305202257241,
    screenshot202305202144592,
    screenshot202305202144472,
    screenshot202305202144271,
    screenshot202305202144082,
    x350880Middle1,
    screenshot202305202144411,
    screenshot202305202144121,
    screenshot202305202144031,
    iconSearch2,
    exploreNewDishes,
    munchAi,
    title,
    newFlavors,
    newDishes,
    newLife,
    discoverUniqueAnd,
    rectangle1,
    weEmpowerCommunity,
    experienceANewWayOfFood,
    line1,
    wellInShortWeHelpYouCook,
    widgetWrapper1Props,
    frame371Props,
    frame341Props,
    widgetWrapper2Props,
    frame342Props,
    frame291Props,
    frame292Props,
    frame293Props,
    frame372Props,
    frame373Props,
    frame374Props,
    frame375Props,
    munchaiProps,
  } = props;

  useEffect(() => {
    var image = document.querySelectorAll(".pngtreepink-pan-kitc");
    new window.simpleParallax(image, {
      orientation: "down right",
      scale: 1.2,
      overflow: true,
      delay: 1.3,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".screenshot-2023-05-20-225724-1");
    new window.simpleParallax(image, {
      orientation: "right",
      scale: 2.4,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".screenshot-2023-05-20-214459-2");
    new window.simpleParallax(image, {
      orientation: "up left",
      scale: 3.2,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".screenshot-2023-05-20-214447-2");
    new window.simpleParallax(image, {
      orientation: "up left",
      scale: 2.8,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".screenshot-2023-05-20-214427-1");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 3.2,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".screenshot-2023-05-20-214408-2");
    new window.simpleParallax(image, {
      orientation: "up right",
      scale: 2.7,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".x350880-middle-1");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 2.5,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".screenshot-2023-05-20-214441-1");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 2.7,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".screenshot-2023-05-20-214412-1");
    new window.simpleParallax(image, {
      orientation: "up right",
      scale: 1.7,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".screenshot-2023-05-20-214403-1");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 2.2,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
    var image = document.querySelectorAll(".title");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 0.5,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.42,0,0.58,1)",
    });
    var image = document.querySelectorAll(".new-flavors");
    new window.simpleParallax(image, {
      orientation: "down",
      scale: 1.2,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.42,0,0.58,1)",
    });
    var image = document.querySelectorAll(".new-dishes");
    new window.simpleParallax(image, {
      orientation: "down",
      scale: 1.2,
      overflow: true,
      delay: 0.6,
      transition: "cubic-bezier(0.42,0,0.58,1)",
    });
    var image = document.querySelectorAll(".new-life");
    new window.simpleParallax(image, {
      orientation: "down",
      scale: 1.2,
      overflow: true,
      delay: 0.8,
      transition: "cubic-bezier(0.42,0,0.58,1)",
    });
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="desktop-x screen">
        <div className="overlap-group1">
          <div className="bottom-gif">
            <lottie-player
              src="https://cdn.animaapp.com/projects/646945d69bd7f2546ecb29fe/files/_main-comp.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="dotted-line-gif">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_e0b3bq2c.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="frame-15">
            <div className="input-bottom">
              <button onClick={()=>handleSubmit()}><img className="icon-search" src={iconSearch1} alt="icon-search" /></button>
              <input className="enter-your-ingredients" style={{ backgroundColor: "#e5e7e3" }} type="text" placeholder="Enter your ingredients"
              onChange = {(e) => setPrompt(e.target.value)}
              />
              <div style={containerStyle}>
                <p style={textStyle}className="output-text">{choices[0]?.message?.content}</p>
              </div>
            </div>
          </div>
          <div className="new-recipes">
            <p className="new-healthy-recipes-await valign-text-middle">{newHealthyRecipesAwait}</p>
          </div>
          <div className="white-circle">
            <div className="ellipse-2"></div>
          </div>
          <div className="frame-container">
            <div className="frame-40">
              <div className="widget-wrapper">
                <img
                  className="pngtreepink-pan-kitc"
                  src={pngtreepinkPanKitchenSuppliesKitche}
                  alt="Pngtreepink pan kitchen supplies kitchen_3879033 1"
                />
              </div>
            </div>
            <div className="frame-39">
              <div className="widget-wrapper-1">
                <img
                  className="screenshot-2023-05-20-225724-1"
                  src={screenshot202305202257241}
                  alt="Screenshot 2023-05-20 225724 1"
                />
              </div>
            </div>
            <div className="frame-38">
              <WidgetWrapper src={widgetWrapper1Props.src} />
            </div>
            <Frame37 src={frame371Props.src} />
            <div className="frame-36">
              <div className="widget-wrapper-2">
                <img
                  className="screenshot-2023-05-20-214459-2"
                  src={screenshot202305202144592}
                  alt="Screenshot 2023-05-20 214459 2"
                />
              </div>
            </div>
            <div className="frame-35">
              <div className="widget-wrapper-3">
                <img
                  className="screenshot-2023-05-20-214447-2"
                  src={screenshot202305202144472}
                  alt="Screenshot 2023-05-20 214447 2"
                />
              </div>
            </div>
            <Frame34 src={frame341Props.src} />
            <div className="frame-33">
              <WidgetWrapper src={widgetWrapper2Props.src} className={widgetWrapper2Props.className} />
            </div>
            <Frame34 src={frame342Props.src} className={frame342Props.className} />
            <div className="frame-31">
              <div className="widget-wrapper-4">
                <img
                  className="screenshot-2023-05-20-214427-1"
                  src={screenshot202305202144271}
                  alt="Screenshot 2023-05-20 214427 1"
                />
              </div>
            </div>
            <Frame29 src={frame291Props.src} />
            <Frame29 src={frame292Props.src} className={frame292Props.className} />
            <div className="frame-26">
              <div className="widget-wrapper-5">
                <img
                  className="screenshot-2023-05-20-214408-2"
                  src={screenshot202305202144082}
                  alt="Screenshot 2023-05-20 214408 2"
                />
              </div>
            </div>
            <Frame29 src={frame293Props.src} className={frame293Props.className} />
            <div className="frame-24">
              <div className="widget-wrapper-6">
                <img className="x350880-middle-1" src={x350880Middle1} alt="350880-middle 1" />
              </div>
            </div>
            <Frame37 src={frame372Props.src} className={frame372Props.className} />
            <Frame37 src={frame373Props.src} className={frame373Props.className} />
            <div className="frame-21">
              <div className="widget-wrapper-7">
                <img
                  className="screenshot-2023-05-20-214441-1"
                  src={screenshot202305202144411}
                  alt="Screenshot 2023-05-20 214441 1"
                />
              </div>
            </div>
            <Frame37 src={frame374Props.src} className={frame374Props.className} />
            <div className="frame-18">
              <div className="widget-wrapper-8">
                <img
                  className="screenshot-2023-05-20-214412-1"
                  src={screenshot202305202144121}
                  alt="Screenshot 2023-05-20 214412 1"
                />
              </div>
            </div>
            <Frame37 src={frame375Props.src} className={frame375Props.className} />
            <div className="frame-16">
              <div className="widget-wrapper-9">
                <img
                  className="screenshot-2023-05-20-214403-1"
                  src={screenshot202305202144031}
                  alt="Screenshot 2023-05-20 214403 1"
                />
              </div>
            </div>
          </div>
          <div className="explore-new-dishes">
            <div className="input">
              <img className="icon-search-1" src={iconSearch2} alt="icon-search" />
              <div className="explore-new-dishes-1 valign-text-middle">{exploreNewDishes}</div>
            </div>
          </div>
          <div className="text-box-1">
            <div className="frame-51">
              <div className="munchai">{munchAi}</div>
            </div>
            <div className="frame-46">
              <div className="widget-wrapper-10">
                <h1 className="title">{title}</h1>
              </div>
            </div>
            <div className="frame-47">
              <div className="widget-wrapper-11">
                <div className="new-flavors inter-semi-bold-black-38px">{newFlavors}</div>
              </div>
            </div>
            <div className="frame-48">
              <div className="widget-wrapper-12">
                <div className="new-dishes inter-semi-bold-black-38px">{newDishes}</div>
              </div>
            </div>
            <div className="frame-49">
              <div className="widget-wrapper-13">
                <div className="new-life inter-semi-bold-black-38px">{newLife}</div>
              </div>
            </div>
            <div className="frame-50">
              <p className="discover-unique-and">{discoverUniqueAnd}</p>
            </div>
          </div>
          <div className="what-we-do">
            <div className="what-we-do-1">
              <div className="overlap-group">
                <div className="group-5">
                  <img className="rectangle-1" src={rectangle1} alt="Rectangle 1" />
                </div>
                <Munchai>{munchaiProps.children}</Munchai>
                <p className="we-empower-community">{weEmpowerCommunity}</p>
                <p className="experiencea-new-way-of-food">{experienceANewWayOfFood}</p>
                <img className="line-1" src={line1} alt="Line 1" />
                <div className="group-2">
                  <p className="well-in-short-we-help-you-cook">{wellInShortWeHelpYouCook}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="clock-gif">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_vkqybeu5/data.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopX;
