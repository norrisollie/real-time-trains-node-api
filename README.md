# Real Time Trains Proxy API using Node JS

A Node JS App to create an API to get train times and service information from
[Real Time Trains](https://realtimetrains.co.uk).

To use:

1. Sign up for a user name and password [here](https://api.rtt.io/)
2. Fill in the username and password in the env file.
3. Run `npm run dev` to start server

- To show live departures from a station:

  `.../search/{CRS CODE}`

- To show a train service info, e.g calling points etc:

  `.../service/{SERVICE ID}/{YEAR}/{MONTH}/{DATE}`
