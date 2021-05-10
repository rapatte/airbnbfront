import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

function Bookingconsulte(props) {
  return (
        <main>
          <section className="consultpage">
            <h2>Votre voyage</h2>
            <div className="datecontainer">
              <div><p>Arrivée</p><p>05/05/2020</p></div>
              <div><p>Depart</p><p>05/05/2020</p></div>
              <div><p>Voyageur</p><p>2 voyageurs</p></div>
            </div>

            <div className="cash">
              <div><p>30€ x 1 nuit</p><p>30$</p></div>
              <div><p>Frais de service</p><p>5$</p></div>
            </div>

            <div className="totalcash"><p>Total</p><p>35$</p></div>

          </section>

          <section className="bottomcontainer">
            <button className="button_red">RESERVE</button>
          </section>
        </main>
  );
}

export default withRouter(Bookingconsulte);
