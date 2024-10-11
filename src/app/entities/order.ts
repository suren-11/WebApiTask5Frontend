import { OrderdItem } from "./orderdItem";

export class Order {

    id: number;
    items: OrderdItem[];
    employeeId: number;
    totalPrice: number;

    constructor(
        id: number,
        items: OrderdItem[],
        employeeId: number,
        totalPrice: number
    ) {
        this.id = id;
        this.items = items,
        this.employeeId = employeeId;
        this.totalPrice = totalPrice;
    }
}