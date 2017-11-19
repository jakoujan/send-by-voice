import { Account } from "./account";
export class Transaction {
    id: number;
    wa: Account;
    da: Account;
    amount: number;
}