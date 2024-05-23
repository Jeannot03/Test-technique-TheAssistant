export class Personne {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    arrivalDate: string;
    house: string;
    assignment?: string;
    isTeacher: boolean;

    constructor(id: number, firstName: string, lastName: string, description: string, arrivalDate: string, house: string, isTeacher: boolean, assignment?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.arrivalDate = arrivalDate;
        this.house = house;
        this.assignment = assignment;
        this.isTeacher = isTeacher;
    }
}