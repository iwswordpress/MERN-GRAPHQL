import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import EventCard from '../components/EventCard';

function Events() {
  const {
    loading,
    data: { getEvents: events }
  } = useQuery(FETCH_EVENTS_QUERY);
  console.log(events);
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Events</h1>
      </div>
      <div className='flex-cards'>
        {loading ? (
          <h1>Loading events..</h1>
        ) : (
          events &&
          events.map(event => <EventCard key={event.id} event={event} />)
        )}
      </div>
    </div>
  );
}

const FETCH_EVENTS_QUERY = gql`
  {
    getEvents {
      id
      body
      createdAt
    }
  }
`;

export default Events;
