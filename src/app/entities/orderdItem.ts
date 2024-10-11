export class OrderdItem {

    id: bigint;
    qty: number;
    total: number;

    constructor(
        id: bigint,
        qty: number,
        total: number
    ) {
        this.id = id;
        this.qty = qty;
        this.total = total;
    }
}