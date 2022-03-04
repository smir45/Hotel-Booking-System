
let config = {
    // replace this key with yours
    "publicKey": "test_public_key_0f13f178dc5146b0bef2c6cf1330bd90",
    "productIdentity": "1234567890",
    "productName": "Accommod",
    "productUrl": "http://localhost:3000",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};


// let btn = document.getElementById("payment-button");


module.exports = config;