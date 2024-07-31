import { LightningElement } from 'lwc';

export default class EmployeeDetailExampleJuly extends LightningElement {
    name;
    age;
    salary;

    nameHandler(event){
        this.name = event.target.value;
    }

    salaryHandler(event){
        this.salary = event.target.value;
    }

    ageHandler(event){
        this.age = event.target.value;
    }
}