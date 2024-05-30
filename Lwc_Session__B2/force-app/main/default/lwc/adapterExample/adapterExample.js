import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import NAME_FIELD from '@salesforce/schema/User.Name';
fields = [EMAIL_FIELD,NAME_FIELD];

export default class AdapterExample extends LightningElement {
    UserId = Id;
    userInfo;


    @wire(getRecord, { recordId: '$UserId'  , fields })
    userDetailHandler({data,error}){
       if(data){
        this.userInfo = data.fields;
       }
       if(error){

       }
    }

}