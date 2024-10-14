import { GenderEnum } from "../enum/GenderEnum";

export class Employee {

      id: number;
      name:string;
      nic: string;
      email:string;
      dateOfBirth: Date;
      gender: string;

    constructor(
        id: number,
        nic: string,
        name: string,
        email: string,
        dateOfBirth: Date,
        gender: string,

    ) {
        this.id = id;
        this.nic = nic;
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    }
}