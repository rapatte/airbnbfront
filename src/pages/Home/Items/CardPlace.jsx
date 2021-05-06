import './CardPlace.scss';

function CardPlace(props) {
  return (
        <article className='card-place'>
            <div className="card-img-container">
                <img src="https://images.unsplash.com/photo-1517227428644-e7521e622e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80" alt=""/>
            </div>
            <div className='ul-container'>
                <ul>
                    <li>{props.name}</li>
                    <li>
                        <span> · </span>
                        {props.city}
                    </li>
                </ul>
            </div>
            <span>{props.description}</span>
        </article>
  );
}

export default CardPlace;
