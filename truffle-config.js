require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stomach response museum unique harvest clog sure genuine'; 
let testAccounts = [
"0x8e03247bb728d3d0d3f41fa7ea1056cde75592b5ef172179cf30f3d914e53e50",
"0x1a87eeac2de8e831dfbac559f739a59a84b239aea715b71e698c43e16fe49e9b",
"0xadc4f7bcde99e5176d2b4bf665b1d0c2e8c11159a2f873e5a6155456817916e8",
"0x8387e3abfe349f2900885f4c5d40325ac053876142c5e560a426f00a8d2453d0",
"0x94c900f070fe3609ccc7816c6a27f93ea17115fbec5e9062ff9c234df2d608f7",
"0x97b995dcd9133ca23f7df5ad3c3998207e05337dda077e0763162ab8a29b6857",
"0x7c16e1d6801b15d79778acbbb2f40b9c457cb95d37d80c850416068d8a367c5e",
"0xcaed05cae65d762d0f03fefd7a48b42fc40e7b7e0cd47717fcfaf06666b7100e",
"0xbfac04161a4793c78e2fcc659c59804fd58866d0c5d107d52b51fa7e37d4be32",
"0xabc990d1a93fb5695e6483a7cf07ebe1952bcef2046a37f33a9987495bcf15ce"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
