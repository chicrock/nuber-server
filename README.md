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

### twilio

```bash
yarn add twilio
yarn add @types/twilio --dev
```

### jwt

```bash
yarn add jsonwebtoken
yarn add @types/jsonwebtoken --dev
```

## Setup

### Create database

### Create strong password for JWT

- [Password Generator](https://passwordsgenerator.net/)

## Resolvers

### Public Resolvers

- [x] Sign In / Sign Up with Facebook
- [x] Sign In with Email
- [x] Start Phone Number Verification
- [x] Complete Phone Number Verification
- [x] Sign Up with Email

---

### Authentication

- [x] Generate JWT
- [x] Verify JWT

---

### Private Resolvers

- [x] Get My Profile
- [] Verify Email
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

## SMS Setting

### Setup Twilio(Programmable SMS)

1. Make project
2. Add credit card info
3. Buy Amarican number
4. Set Messaging Geographic Permissions

### Using Token

1. Go Dashboard
2. Copy Auth Token
3. Set environment variables in .env file

```bash
TWILIO_SID=
TWILIO_TOKEN=
TWILIO_PHONE=
```
