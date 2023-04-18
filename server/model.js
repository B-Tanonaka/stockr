const yahooFinance = require('yahoo-finance2').default;
const moment = require('moment');

module.exports = {
  yahoo: async (query, date) => {
    const queryOptions = { period1: date, interval: '1d' };
    const data = await yahooFinance._chart(query, queryOptions);
    return data.quotes.map((day) => ({
      date: moment(day.date).format('MMMM do, YYYY'),
      [query.toUpperCase()]: Math.round(day.close * 100) / 100,
    }
    ));
  },
};
