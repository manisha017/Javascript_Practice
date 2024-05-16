public with sharing class AccountController {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(String type){
        return [Select Id,Name,type,Industry from Account where type=:type Limit 5];
    }
}