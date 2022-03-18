---
title: Opera Wallet Integration Guide
authors:
- danny-yao
intro: 'By supporting the Opera Crypto Wallet, Dapp developers can gain access to millions of crypto users on Opera platform. To do so, Dapp developers need simply add a few lines of code to set up integration with the Opera Crypto Wallet.'
tags:
- crypto
- opera wallet
- crypto browser
- evm
- ethereum browser
license: cc-by-3.0
---

Opera is one of the most popular browsers in the world, with more than 350 million active users. Opera’s built-in Crypto Wallet helps users access the world of Web3 without the complicated setup of other wallet applications.

By supporting the Opera Crypto Wallet, Dapp developers can gain access to millions of crypto users on Opera platform. To do so, Dapp developers need simply add a few lines of code to set up integration with the Opera Crypto Wallet.


## Best Practice

There are two steps in requesting a user connect their Opera Crypto Wallet to your dApp, without the need for SDK installation.

### Step 1: Detect whether the user is using Opera Wallet

Check the global variable to see if the client is Opera.
```javascript=
let isOperaWallet = false;
if(window.ethereum){
    isOperaWallet = window.ethereum.isOpera;
}
if(isOperaWallet){
    // add Opera Wallet as the first option in the wallet connection panel.
}
```

### Step 2: Prompt user to connect the wallet

If they’re using the Opera Crypto Wallet, then you can request the user connect the wallet following EIP-1193. Opera Browser will then prompt the Opera Crypto Wallet and ask the user to connect the wallet to the Dapp.

```javascript=
if(window.ethereum){
    window.ethereum.request({method: 'eth_requestAccounts'})
}
```
### Opera Wallet Connection Button
When adding Opera Crypto Wallet as an option in the wallet connection panel, please use the official Opera Wallet logo. 

![Opera Wallet Logo](https://lh6.googleusercontent.com/MyqY0TBos2G5PprSazvsm2FTceS9-o7vg97tCJvncTQSPHOCw6cqEcz2TD3AXowGK3-qinTU8GH5KT6lhmuhg511NwWPvi0OMqSJva2h65tNU7mfUxDxenVcMVEn9RtEGtwr0l6W)

To download the Opera Crypto Wallet logo, please click [here](https://brand.opera.com/wp-content/uploads/sites/6/2022/02/Opera-Wallet-Logo-Sets.zip).

## Alternative Approach
The following libraries also allow you to connect to the Opera Wallet:

* [Web3Modal](https://github.com/Web3Modal/web3modal)

## Interact with the wallet
The implementation of Opera Wallet follows [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193). You can connect the wallet with library implemented EIP-1193, such as web3.js or ether.js.

## Download Opera Crypto Browser
You can access the Opera Crypto Wallet by downloading Opera’s Crypto Browser. You can download it [here](http://opera.com/crypto/next).

To set up the wallet, click the wallet icon on the left sidebar. You can set up a new wallet or restore your existing wallet with your recovery phrase.

## Switch network for the user
The wallet also covers implementation on [EIP-3326](https://eips.ethereum.org/EIPS/eip-3326). As a result, you can use `wallet_switchEthereumChain` to request the user switch networks. The wallet will display a popup allowing users to switch networks in one click.

## Add network for the user
The wallet also covers implementation on [EIP-3085](https://eips.ethereum.org/EIPS/eip-3085). As a result, you can use `wallet_addEthereumChain` to request the user add a new network.
