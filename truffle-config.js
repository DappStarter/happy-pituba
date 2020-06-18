require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strike cruise spike proof gentle light army genuine'; 
let testAccounts = [
"0x53fae07587bc96484f8533ae4c166c4dccf47b556e737398d389e94a8544d10d",
"0x3d8e26bd02079ac7075d3b54563ea9d2df881378fb6c46475a326c2313f0318e",
"0xb5e9f370966511eed446e72069419ce17559403b89330326a0f8f15e81153f4e",
"0x7cd62ce06303a8390b35b44cecefc5eb4b5e9913bc18cf377416bcb6fdec369a",
"0x3b6ff2440dcaf11ba85f1dedf22ffdbdb00c02b9301f4709faab6aadc28f6817",
"0x6160f71080104d4b0b893f12c585c322cbc6881ce4af921454d37e7cd83fd12c",
"0x7076a30a00333a4498a416a7564990e1d95ff0be53c94ba0b631b861ce8eedc0",
"0x3638f8e69ca6c932d7116f9e785b8ac20f8f33f5ad424b9b988831c7211da7a2",
"0x16d513c97144ae8571004f2ff4361da610ea6d37cdafc0c8236d5c69fc9e4fff",
"0x5a9df4acdfc5c8c0c385129c0aebefe3be56a493cb12b4b9353b10412970e491"
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
