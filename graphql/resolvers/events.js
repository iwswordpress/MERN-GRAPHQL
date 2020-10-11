const Event = require('../../models/Event');

module.exports = {
  Query: {
    async getEvents() {
      try {
        const events = await Event.find().sort();
        return events;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
