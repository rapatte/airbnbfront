import './select.scss';

function Select(props) {
  return (
    <label >
      Choisissez votre role
      <select name={props.name} value={props.value} onChange={props.handleChange}>
          <option value="tourist">Touriste</option>
          <option value="host">Hôte</option>
      </select>
    </label>
  );
}

export default Select;
