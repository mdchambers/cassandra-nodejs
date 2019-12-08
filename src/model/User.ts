import {types} from "cassandra-driver";
import Uuid = types.Uuid;


export class User {
    id: Uuid;
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.id = Uuid.random();
        this.name = name;
        this.email = email;
    }

    toString() {
        return `User: ${this.id} ${this.name} ${this.email}`
    }
}