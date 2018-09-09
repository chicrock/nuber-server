# nuber-server

Server for the Uber Clone Course on Nomad Academy. GraphQL, Typescript, NodeJS

## Install

### Init

```bash
yarn add typescript ts-node nodemon --dev
yarn add tslint-config-prettier --dev
yarn add dotenv class-validator bcrypt
```

### graphql

```bash
yarn add graphql-yoga graphql-tools merge-graphql-schemas

# install for connect to graphql and typescript
yarn add graphql-to-typescript gql-merge babel-runtime --dev
```

### Middleware

```bash
yarn add helmet morgan cors
```

### @types

```bash
yarn add @types/node @types/cors @types/helmet @types/morgan @types/bcrypt --dev
```

### typeorm

```bash
yarn add typeorm pg
```

## Setup

### Create database

## Resolvers

### Public Resolvers

- [x] Sign In / Sign Up with Facebook
- [x] Sign In with Email
- [] Start Phone Number Verification
- [] Complete Phone Number Verification
- [] Sign Up with Email

### Private Resolvers

- [] Generate JWT
- [] Verify JWT
- [] Verify Email
- [] Get My Profile
- [] Update My Profile
- [] Toggle Driving Mode
- [] Report Location / Orientation
- [] Add Place
- [] Edit Place
- [] Delete Place
- [] See Nearby Drivers
- [] Subscribe to Nearby Drivers
- [] Request a Ride
- [] Get Nearby Ride Requests
- [] Subscribe to Nearby Ride Requests
- [] Subscribe to Ride Status
- [] Get Chat Room Message
- [] Subscribe to Chat Room Messages
- [] Send a Chat Message

### Code Challenge

- [] Get Ride History
- [] See Ride Detail

## Memo

- [Get fbId](https://findmyfbid.com/)
- [Send SMS](https://www.twilio.com/)
