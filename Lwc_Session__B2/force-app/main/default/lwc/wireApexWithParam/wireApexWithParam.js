import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class WireApexWithParams extends LightningElement {
    selectedType = ''
    
    @wire(getAccountList,{type : '$selectedType'})
    filterAccountRecords;




    get options() {
        return [
            { label: 'Customer - Channel', value: 'Customer - Channel' },
            { label: 'Customer - direct', value: 'Customer - direct' }
        ];
    }
    handleClick(event){
        this.selectedType = event.target.value;
    }


}