//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// Encryption.js
// CryptoJS component for encryption and decryption of data.
//
// Last Updated: 18/03/2024
//

import { Component } from 'react';
import CryptoJS from 'react-native-crypto-js';

export default class Encryption extends Component {
    //Encrypt data
    static encrypt(plainText) {
        const secret_key = "NdRgUkXp2s5vr4u7x!A%C*F-Ja8y/B?E";
        const iv = CryptoJS.lib.WordArray.random(16);

        try {
            const encrypted = CryptoJS.AES.encrypt(
                plainText,
                CryptoJS.enc.Utf8.parse(secret_key),
                { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
            ).toString();

            // Combine IV and ciphertext
            const combinedData = CryptoJS.lib.WordArray.create();
            combinedData.concat(iv);
            combinedData.concat(CryptoJS.enc.Base64.parse(encrypted));

            return combinedData.toString(CryptoJS.enc.Base64);

        } catch (error) {
            //Something went wrong
            throw new Error('Failed to encrypt data');
        }
    }

    //Decrypt data
    static decrypt(encryptedText) {
        const secret_key = "NdRgUkXp2s5vr4u7x!A%C*F-Ja8y/B?E";

        // Extract IV and ciphertext
        const combinedData = CryptoJS.enc.Base64.parse(encryptedText);
        const iv = combinedData.clone();
        iv.sigBytes = 16;
        iv.clamp();

        const ciphertext = combinedData.clone();
        ciphertext.words.splice(0, 4);
        ciphertext.sigBytes -= 16;

        try {
            const decrypted = CryptoJS.AES.decrypt(
                { ciphertext: ciphertext },
                CryptoJS.enc.Utf8.parse(secret_key),
                { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
            ).toString(CryptoJS.enc.Utf8);
            return decrypted;

        } catch (error) {
            //Something went wrong
            throw new Error('Failed to decrypt data');
        }
    }
}
