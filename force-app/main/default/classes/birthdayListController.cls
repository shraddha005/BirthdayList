public with sharing class birthdayListController {
    public birthdayListController() {
    
}
@AuraEnabled
public static List<Contact> getContactNamesForBirthdayList(){

    List<string> contactNameList = new List<string>();
    List<Contact> contactsList = [select Name from contact limit 5];
    for(Contact con:contactsList)
    {
        contactNameList.add(con.Name);
    }
    return contactsList;
        
    }

}

