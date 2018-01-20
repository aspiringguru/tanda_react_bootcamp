import React from "react";
import ReactDom from "react-dom";

import HelloWorld2 from "./Component/HelloWorld";
import HelloPluto from "./Component/HelloPluto";

import NewsFeed from './View/NewsFeed';


const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
const MY_PRECIS = 'awesomeness'

const ARTICLES = [
  {
    description: LOREM_IPSUM,
    precis: MY_PRECIS,
    id: 1,
    link: 'https://google.com',
    title: 'Article 1',
  },
  {
    description: LOREM_IPSUM,
    precis: MY_PRECIS,
    id: 2,
    link: 'https://google.com',
    title: 'Article 2',
  },
  {
    description: LOREM_IPSUM,
    precis: MY_PRECIS,
    id: 3,
    link: 'https://google.com',
    title: 'Article 3',
  },
]



const VIEW =
  <div>
    <HelloWorld2/>
    <HelloPluto/>
    <NewsFeed articles={ARTICLES} />
  </div>

ReactDom.render(
  VIEW,
  document.getElementById('root'),
);
