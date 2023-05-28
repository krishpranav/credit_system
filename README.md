# Credit System 

# About:
- Simple Credit/Bank System which helps in transfering, withdrawl, deposit & balance checking functionalities.

# Technologies used:
- ReactJS
- ETH
- Solidity
- Ganache
- Mocha

# Setup:
## clone this repo
```
git clone https://github.com/krishpranav/credit_system
```

- make sure that you have [truffle](https://trufflesuite.com) in your machine, if you dont have try installing it by running this command ```npm i -g truffle```

## Compile The Contracts:
```
truffle compile
```

## Migrate the contracts:
```
truffle migrate --network=develop --reset
```

## Run the frontend:
```
cd frontend/
npm install && npm run start
```