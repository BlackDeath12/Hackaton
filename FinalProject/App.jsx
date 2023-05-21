import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DesktopX from "./components/DesktopX";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-x)">
          <DesktopX {...desktopXData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const widgetWrapper1Data = {
    src: "/img/screenshot-2023-05-20-225713-1@2x.png",
};

const frame371Data = {
    src: "/img/screenshot-2023-05-20-225638-1@2x.png",
};

const frame341Data = {
    src: "/img/screenshot-2023-05-20-214441-2@2x.png",
};

const widgetWrapper2Data = {
    src: "/img/screenshot-2023-05-20-214436-2@2x.png",
    className: "widget-wrapper-1",
};

const frame342Data = {
    src: "/img/screenshot-2023-05-20-214431-1@2x.png",
    className: "frame-32",
};

const frame291Data = {
    src: "/img/screenshot-2023-05-20-214423-2@2x.png",
};

const frame292Data = {
    src: "/img/screenshot-2023-05-20-214418-1@2x.png",
    className: "frame-28",
};

const frame293Data = {
    src: "/img/screenshot-2023-05-20-214403-2@2x.png",
    className: "frame-25",
};

const frame372Data = {
    src: "/img/350936-small-1@2x.png",
    className: "frame-23",
};

const frame373Data = {
    src: "/img/screenshot-2023-05-20-214447-1@2x.png",
    className: "frame-22",
};

const frame374Data = {
    src: "/img/screenshot-2023-05-20-214436-1@2x.png",
    className: "frame-20",
};

const frame375Data = {
    src: "/img/screenshot-2023-05-20-214408-1@2x.png",
    className: "frame-17",
};

const munchaiData = {
    children: "munch.ai",
};

const desktopXData = {
    iconSearch1: "/img/icon@2x.png",
    enterYourIngredients: "Enter your ingredients...",
    newHealthyRecipesAwait: "   New, healthy recipes await...",
    pngtreepinkPanKitchenSuppliesKitche: "/img/-pngtree-pink-pan-kitchen-supplies-kitchen-3879033-1@2x.png",
    screenshot202305202257241: "/img/screenshot-2023-05-20-225724-1@2x.png",
    screenshot202305202144592: "/img/screenshot-2023-05-20-214459-2@2x.png",
    screenshot202305202144472: "/img/screenshot-2023-05-20-214447-2@2x.png",
    screenshot202305202144271: "/img/screenshot-2023-05-20-214427-1@2x.png",
    screenshot202305202144082: "/img/screenshot-2023-05-20-214408-2@2x.png",
    x350880Middle1: "/img/350880-middle-1@2x.png",
    screenshot202305202144411: "/img/screenshot-2023-05-20-214441-1@2x.png",
    screenshot202305202144121: "/img/screenshot-2023-05-20-214412-1@2x.png",
    screenshot202305202144031: "/img/screenshot-2023-05-20-214403-1@2x.png",
    iconSearch2: "/img/icon-1@2x.png",
    exploreNewDishes: "Explore new dishes...",
    munchAi: "munch.ai",
    title: "Experience",
    newFlavors: "New Flavors.",
    newDishes: "New Dishes.",
    newLife: "New Life.",
    discoverUniqueAnd: "Discover unique and healthy recipes tailored to your dietary needs and preferences, powered by OpenAI.",
    rectangle1: "/img/rectangle-1.png",
    weEmpowerCommunity: "We empower community through food: delicious, healthy, and sustainable choices for all. Let's reduce waste, support local farmers, and savor a future of affordable and nourishing meals. With AI generated recipes for your every craving, join us on this journey towards a better food system, and alternative for eating creative, healthy and innovative meals.",
    experienceANewWayOfFood: "So, what do we do?",
    line1: "/img/line-1@2x.png",
    wellInShortWeHelpYouCook: "Well in short, we help you cook!",
    widgetWrapper1Props: widgetWrapper1Data,
    frame371Props: frame371Data,
    frame341Props: frame341Data,
    widgetWrapper2Props: widgetWrapper2Data,
    frame342Props: frame342Data,
    frame291Props: frame291Data,
    frame292Props: frame292Data,
    frame293Props: frame293Data,
    frame372Props: frame372Data,
    frame373Props: frame373Data,
    frame374Props: frame374Data,
    frame375Props: frame375Data,
    munchaiProps: munchaiData,
};

