import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    name = '';
    

    handleNameChange(event){

        this.name = event.target.value;

    }
}