
export class UserDepartment {

    id: number;
    userId: bigint;
    departmentId: bigint;
    isActive: boolean;

    constructor(
        id: number,
        userId: bigint,
        departmentId: bigint,
        isActive: boolean
    ) {
        this.id = id;
        this.userId = userId;
        this.departmentId = departmentId;
        this.isActive = isActive;
    }
}