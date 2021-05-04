import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

function Bookingconsulte(props) {
  return (
        <main>
          <section>
            <h2>Votre voyage</h2>
            <div>
              <div><span>Arrivée</span><p>05/05/2020</p></div>
              <div><span>Depatrt</span><p>05/05/2020</p></div>
              <div><span>Voyagageurs</span><p>2 vayogers</p></div>
            </div>

            <div className="cash">
              <div><p>30€ x 1 nuit</p><p>30$</p></div>
              <div><p>Frais de service</p><p>5$</p></div>
            </div>

            <div><p>Total</p><p>35$</p></div>
            <p>Il ne vous reste que 7 heures pour réserver.Bientôt,
              l'hôte n'acceptera plus de réservations aux dates de votre choix.</p>
          </section>
        </main>
  );
}

export default withRouter(Bookingconsulte);
