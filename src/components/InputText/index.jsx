import './input.scss';

function InputText(props) {
  return (
        <input className={`${props.border} form-input`} type={props.type} name={props.name}
        onChange={props.handleChange} value={props.value} placeholder={props.placeholder}/>
  );
}

export default InputText;
