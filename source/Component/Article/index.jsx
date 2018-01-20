import React from 'react';

export default function Article(props) {
  return (
    <article>
      <h3> {props.title} </h3>
      <h2> {props.precis} </h2>
      <p>
        {props.description}
        <a href={props.link}> {props.link} </a>
      </p>
    </article>
  )
}
