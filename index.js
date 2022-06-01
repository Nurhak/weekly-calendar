import Calendar from './calendar.js';

const events = [
  { id: 0, eventName: 'Event 0', dateFrom: 1654030827577, dateTo: 1654032026577 },
  { id: 1, eventName: 'Event 1', dateFrom: 1654084000000, dateTo: 1654085435129 },
  { id: 1, eventName: 'Long event name 1', dateFrom: 1654705888000, dateTo: 1655051488000 },
  { id: 2, eventName: 'Event 2', dateFrom: 1654709488000, dateTo: 1654968688000 },
  { id: 3, eventName: 'Event 3', dateFrom: 1651667488000, dateTo: 1652027488000 },
  { id: 4, eventName: 'Event 4', dateFrom: 1651752000000, dateTo: 1651759200000 },
  { id: 5, eventName: 'Event 5', dateFrom: 1652269500000, dateTo: 1652270400000 },
  { id: 6, eventName: 'Event 6', dateFrom: 1649757688000, dateTo: 1656064888000 },
  { id: 7, eventName: 'Event 7', dateFrom: 1651399200000, dateTo: 1652092200000 },
  { id: 8, eventName: 'Event 8', dateFrom: 1651755600000, dateTo: 1651761000000 },
  { id: 9, eventName: 'Event 9', dateFrom: 1652092200000, dateTo: 1652099400000 },
]

new Calendar(events);