
export class UserDepartment {

    id: bigint;
    userId: bigint;
    departmentId: bigint;
    createdDate: Date;
    lastUpdatedDate: Date;

    constructor(
        id: bigint,
        userId: bigint,
        departmentId: bigint,
        createdDate: Date,
        lastUpdatedDate: Date
    ) {
        this.id = id;
        this.userId = userId;
        this.departmentId = departmentId;
        this.createdDate = createdDate;
        this.lastUpdatedDate = lastUpdatedDate
    }
}