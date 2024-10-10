import e from "express";

export class Employee {

    id: string;
    nic:string;
    name: string;
    email:string;
    dateOfBirth: Date;
    gender: string;
    created: Date;
    updated: Date;

    constructor(
        id: string,
        nic: string,
        name: string,
        email: string,
        dateOfBirth: Date,
        gender: string,
        created: Date,
        updated: Date,
    ) {
        this.id = id;
        this.nic = nic;
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.created = created;
        this.updated = updated;
    }
}