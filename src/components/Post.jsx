import classes from './Post.module.css';



function Post(props) {

const removeHandler = () => {
props.onRemove(props.id)
}

  return (
    <li className={classes.post} onClick={removeHandler}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body} </p>
    </li>
  );
}

export default Post;
