import './button.scss';

function Button(props) {
  return (
        <button className={`${props.size} ${props.class}`}
        onClick={props.handleClick}>{props.value}</button>
  );
}

export default Button;
