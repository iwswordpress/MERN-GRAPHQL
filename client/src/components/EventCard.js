import React from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaBeer } from 'react-icons/fa';
import avatar1 from '../images/avatar1.png';

function EventCard({ event: { body, id } }) {
  return (
    <div className='card'>
      <div>
        <div>
          <p> {id}</p>

          <h1>{body}</h1>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
