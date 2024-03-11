import CryptoJS from 'react-native-crypto-js';

export default class Encryption {
    //Encrypt data
    static encrypt(plainText) {
        const secret_key = "r4u7x!A%C*F-JaNdRgUkXp2s5v8y/B?E";
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
        const secret_key = "r4u7x!A%C*F-JaNdRgUkXp2s5v8y/B?E";

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
