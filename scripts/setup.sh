#!/usr/bin/env bash

# Deploy Contracts on Rinkeby
truffle migrate --reset --network rinkeby

# Verify Contracts on Etherscan
truffle run verify ContractName --network rinkeby --license SPDX-License-Identifier

# Flatten Contracts
./node_modules/.bin/truffle-flattener contracts/ContractName.sol > flats/ContractName_flat.sol