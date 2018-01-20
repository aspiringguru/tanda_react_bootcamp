export default function Article(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.link}>{props.link}</a>
    </div>
  )
}
