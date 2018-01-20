import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from "./Component/HelloWorld";

const title = 'Hello Hacker News---';

const blah_blah = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

function Article(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.link}>{props.link}</a>
    </div>
  )
}

const element =
<div>
  <div
      style={{ fontSize: 36, color: 'green' }}
      onClick={() => window.alert( title)}
    >
    {title}
  </div>

  <div>
    <Article
      title = 'blah1'
      description = {blah_blah}
      link = 'http://oops.com'
    />
    <Article
      title = 'blah2'
      description = {blah_blah}
      link = 'http://oops.com'
    />
    <Article
      title = 'blah3'
      description = {blah_blah}
      link = 'http://oops.com'
    />
  </div>
</div>

const root = document.getElementById('root');

ReactDOM.render(element, root);
