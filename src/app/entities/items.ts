export class Item {

    id: bigint;
    name: string;
    description: string;
    price: number;
    created: Date;
    updated:Date;

    constructor(
        id: bigint,
        name: string,
        description: string,
        price: number,
        created: Date,
        updated:Date,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.created = created;
        this.updated = updated;
    }
}