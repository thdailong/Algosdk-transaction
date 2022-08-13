import algosdk from "algosdk";
import { AccountI } from "../Account.js";
import * as fs from "fs";

async function Recover() {
    const recovered_pay_txn = algosdk.decodeUnsignedTransaction(Buffer.from(fs.readFileSync("pay.txn").toString(), "base64"))
    console.log(recovered_pay_txn);

    let signedTxn = recovered_pay_txn.signTxn(AccountI.sk);
    fs.writeFileSync("recover_signed_pay.txn", Buffer.from(signedTxn).toString("base64"));


}

Recover();