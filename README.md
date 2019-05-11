# auth.bitcoin.com

[![Greenkeeper badge](https://badges.greenkeeper.io/christroutner/auth.bitcoin.com.svg)](https://greenkeeper.io/)

This is the parent repository for
the [Bitcoin.com version](https://github.com/Bitcoin-com/auth.bitcoin.com) of
this repository. By maintaining the parent fork in my personal repository,
it makes it possible to automatically maintain dependencies with Greenkeeper.

## Installation
- After cloning this repository, start by installing the dependencies with: <br /> `npm install`

- You'll also need to [Install Cassandra DB](http://cassandra.apache.org/doc/latest/getting_started/installing.html).

- Navigate to the [src/lib/cassandra/setup](src/lib/cassandra/setup) directory
and set up the keyspace and user table.

- You can now run `npm start` and manage the app
with [pm2](http://pm2.keymetrics.io/) or other process manager like Docker
or Systemd.
