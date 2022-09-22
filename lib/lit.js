import LitJsSdk from "@lit-protocol/sdk-browser";

const client = new LitJsSdk.LitNodeClient()
const chain = "mumbai"




class Lit {
  litNodeClient

  async connect() {
    await client.connect()
    this.litNodeClient = client
  }

  //  * Access control for a wallet with > 0.00001 ETH
accessControl = (owner) => [
  {
    contractAddress: '',
    standardContractType: '',
    chain,
    method: '',
    parameters: [
      ':userAddress',
    ],
    returnValueTest: {
      comparator: '=',
      value: owner
    }
  }
]

  async encryptString(str, owner) {
    if (!this.litNodeClient) {
      await this.connect()
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(str)

    const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
      accessControlConditions: this.accessControl(owner),
      symmetricKey,
      authSig,
      chain,
    })

    return {
      encryptedString: encryptedString,
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16")
    }
  }

  async decryptString(encryptedStr, encryptedSymmetricKey, owner) {
    if (!this.litNodeClient) {
      await this.connect()
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
    const symmetricKey = await this.litNodeClient.getEncryptionKey({
      accessControlConditions: this.accessControl(owner),
      toDecrypt: encryptedSymmetricKey,
      chain,
      authSig
    })
    const decryptedFile = await LitJsSdk.decryptString(
      encryptedStr,
      symmetricKey
    );
    // eslint-disable-next-line no-console
    return { decryptedFile }
  }

  async encryptObject(jsonFile, owner) {
    let encryptedObject = {};
    let subObject = {"PatientDetails":{}};
    for (let key in jsonFile) {
      let value = jsonFile[key]; 
      if(Array.isArray(value)) {
        subObject[key] = value.join(",");
      }
      else if(typeof value === "object") {
        subObject[key] = JSON.stringify(value);
      }
      else {
        subObject["PatientDetails"][key] = value;
      }
    };
    subObject["PatientDetails"] = JSON.stringify(subObject["PatientDetails"]);
    for (let key in subObject) {
      const encrypted = await this.encryptString(subObject[key], owner);
      encryptedObject[key] = encrypted;
    }
    return encryptedObject;
  }

  async decryptObject(encryptedObject, owner) {
    let decryptedObject = {};
    for (let key in encryptedObject) {
      const { encryptedString, encryptedSymmetricKey } = encryptedObject[key];
      const decryption = await this.decryptString(encryptedString, encryptedSymmetricKey, owner);
      decryptedObject[key] = decryption.decryptedFile;
    }
    return decryptedObject;
  }
}

export default new Lit()
