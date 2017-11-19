export class Account {
    id: number;
    account: string;
    description: string;

    constructor(id: number, account: string, description: string) {
        this.id = id;
        this.account = account;
        this.description = description;
    }

}