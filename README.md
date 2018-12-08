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

### mailgun

```bash
yarn add mailgun-js && yarn add@types/mailgun-js --dev
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

### Using Curry for resolverMiddleware

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
- [x] Request Email Verification
- [x] Complete Email Verification
- [x] Update My Profile
- [x] Toggle Driving Mode
- [x] Report Location / Orientation
- [x] Add Place
- [x] Edit Place
- [x] Delete Place
- [x] Get My Places
- [x] See Nearby Drivers
- [x] Subscribe to Nearby Drivers
- [x] Request a Ride
- [x] Get Nearby Ride Requests
- [x] Subscribe to Nearby Ride Requests
- [x] Update Ride Status
- [x] Get Ride
- [x] Subscribe to Ride Status
- [x] Create a Chat room
- [x] Get Chat Room Message
- [X] Send a Chat Message
- [X] Subscribe to Chat Room Messages

### Code Challenge

- [ ] Get Ride History
- [ ] See Ride Detail

## Memo

- [Get fbId](https://findmyfbid.com/)
- [Send SMS](https://www.twilio.com/)
- [Send Email](https://www.mailgun.com)

### Typeorm makes relations fields automatically when only define fields name with Id

- Need relations with User, just add Columns in Entity with userId

```js
@Column({ nullable: true })
  userId: number;
```

### Find Operator on typeorm

- Find operators like between work only with getRepository function(These functions didn't work on active record)
- [Typeorm find options](https://github.com/typeorm/typeorm/blob/master/docs/find-options.md)

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
