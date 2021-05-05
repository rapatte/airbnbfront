import './button.scss';

function Button(props) {
  return (
        <button className={`${props.size} ${props.color}`}
        onClick={props.handleClick}>{props.value}</button>
  );
}

export default Button;
