import { connect } from '@tableland/sdk'

const schema = `name text, encryptedValue text, encryptedSymmetricKey text, primary key (name)`;
const tablePrefix = 'testTable76';

class TableLand {
  tableland

  async connect() {
    // Establish a connection
    let tableland = await connect({ network: "testnet", chain: "polygon-mumbai" });
    // For client-side apps, call `siwe` to prompt a browser wallet sign-in flow
    await tableland.siwe();
    this.tableland = tableland;
  }

  async checkConnected() {
    if (!this.tableland) {
      await this.connect()
    }
  }

  async checkExistingTable() {
    await this.checkConnected();
    const tables = await this.tableland.list(); // returns an Object with the Tables the connected address owns
    const myMatchingTables = Object.values(tables).filter((table) => table.name.includes(tablePrefix)); // filters `tables` for matching `structure`s
    return myMatchingTables;
  }

  async createTable() {
    await this.checkConnected();
    
    // Create a table
    const { name } = await this.tableland.create(schema, {
      prefix: tablePrefix // Optional `prefix` used to define a human-readable string
    })
    console.log("created table", name);
    return name;
  }

  async createAppointmentTable() {
    await this.checkConnected();
    
    // Create a table
    const { name } = await this.tableland.create(`name text, value text, primary key (name)`, {
      prefix: "appointmentTest" // Optional `prefix` used to define a human-readable string
    })
    console.log("created table", name);
    return name;
  }

  toHexString(buffer) {
    const bytes = new Uint8Array(buffer);
    return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
  }

  async writeToTable(tableName, encryptedObject) {
    await this.checkConnected();
    for (var key in encryptedObject) {
      const encryptedString = encryptedObject[key].encryptedString;
      const encryptedSymmetricKey = encryptedObject[key].encryptedSymmetricKey;
      const buffer = await encryptedString.arrayBuffer();
      const encryptedHex = this.toHexString(buffer);
      // TODO: Add a loading indicator for table writes!
      this.tableland.write(`INSERT INTO ${tableName} VALUES ('${key}', '${encryptedHex}', '${encryptedSymmetricKey}')`);
    }
    console.log("Wrote full to table");
  }

  async writeUnencryptedToTable(tableName, unencryptedObject) {
    await this.checkConnected();
    for (var key in unencryptedObject) {
      // TODO: Add a loading indicator for table writes!
      this.tableland.write(`INSERT INTO ${tableName} VALUES ('${key}', '${unencryptedObject[key]}')`);
    }
    console.log("Wrote full to table");
  }

  async readFromTable(tableID) {
    await this.checkConnected();
    const readRes = await this.tableland.read(`SELECT * FROM ${tableID}`);
    let encryptedObject = {};
    for (let idx in readRes.rows) {
      const record = readRes.rows[idx];
      // COnvert hex back to blob
      const fromHexString = (hexString) =>
        Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

      const blob = new Blob([fromHexString(record[1])], { type: "application/octet-stream" });

      encryptedObject[record[0]] = { encryptedString: blob, encryptedSymmetricKey: record[2] };
    }
    return encryptedObject;
  }

}

export default new TableLand()
