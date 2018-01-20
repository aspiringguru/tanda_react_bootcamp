import React from 'react';
import styles from './styles.css';

export default function Article(props) {
  return (
    <article className={styles.article}>
      <h3 className={styles.title}> {props.title} </h3>
      <h2 className={styles.precis}> {props.precis} </h2>
      <p className={styles.desc}>
        {props.description}
        <a className={styles.link} href={props.link}> {props.link} </a>
      </p>
    </article>
  )
}
