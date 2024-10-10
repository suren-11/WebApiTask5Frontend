
export class Department {

    id: bigint;
    name: string;
    description: string;
    code: string;

    constructor(
        id: bigint,
        name: string,
        description: string,
        code: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.code = code;
    }
}