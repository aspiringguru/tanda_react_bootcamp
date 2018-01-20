import React from "react";
import ReactDom from "react-dom";

import HelloWorld2 from "./Component/HelloWorld";
import HelloPluto from "./Component/HelloPluto";
import Article from "./Component/Article"

function NewsFeed(props) {
  const articles = props.articles.map(article =>
    <Article
      description={article.description}
      precis={article.precis}
      key={article.id}
      link={article.link}
      title={article.title}
    />
  )

  return (
    <div>{articles}</div>
  )
}

const LOREM_IPSUM = 'blah blah eerg blah zzz'
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
