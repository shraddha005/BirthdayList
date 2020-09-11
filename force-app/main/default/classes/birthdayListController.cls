/*
Author : Shraddha Kamble
*/
public with sharing class birthdayListController {
    public birthdayListController() {
    
}
@AuraEnabled
public static List<Contact> getContacts(String selectedMonthInt){
  integer monthNum;
    if(selectedMonthInt == 'January')
    {
        monthNum = 1;
    }
    else if(selectedMonthInt == 'February')
    {
        monthNum = 2;
    }
    else if(selectedMonthInt == 'March')
    {
        monthNum = 3;
    }
    else if(selectedMonthInt == 'April')
    {
        monthNum = 4;
    }
    else if(selectedMonthInt == 'May')
    {
        monthNum = 5;
    }
    else if(selectedMonthInt == 'June')
    {
        monthNum = 6;
    }
    else if(selectedMonthInt == 'July')
    {
        monthNum = 7;
    }
    else if(selectedMonthInt == 'August')
    {
        monthNum = 8;
    }
    else if(selectedMonthInt == 'September')
    {
        monthNum = 9;
    }
    else if(selectedMonthInt == 'October')
    {
        monthNum = 10;
    }
    else if(selectedMonthInt == 'November')
    {
        monthNum = 11;
    }
    else
    {
        monthNum = 12;
    }


    List<Contact> contactsList = [SELECT   Name , Date_Of_Joining__c ,id ,Email,Birthdate
    FROM Contact 
    WHERE CALENDAR_MONTH(Date_Of_Joining__c) =: monthNum];
    system.debug(contactsList);
    return contactsList;
        
    }
    @AuraEnabled
    public static List<Contact> getContactNamesForBirthdayList(String selectedMonthInt){
      integer monthNum;
        if(selectedMonthInt == 'January')
        {
            monthNum = 1;
        }
        else if(selectedMonthInt == 'February')
        {
            monthNum = 2;
        }
        else if(selectedMonthInt == 'March')
        {
            monthNum = 3;
        }
        else if(selectedMonthInt == 'April')
        {
            monthNum = 4;
        }
        else if(selectedMonthInt == 'May')
        {
            monthNum = 5;
        }
        else if(selectedMonthInt == 'June')
        {
            monthNum = 6;
        }
        else if(selectedMonthInt == 'July')
        {
            monthNum = 7;
        }
        else if(selectedMonthInt == 'August')
        {
            monthNum = 8;
        }
        else if(selectedMonthInt == 'September')
        {
            monthNum = 9;
        }
        else if(selectedMonthInt == 'October')
        {
            monthNum = 10;
        }
        else if(selectedMonthInt == 'November')
        {
            monthNum = 11;
        }
        else
        {
            monthNum = 12;
        }
       
        List<Contact> contactsList = [SELECT   Name , BirthDate ,id
        FROM Contact 
        WHERE CALENDAR_MONTH(BirthDate) =: monthNum];
        
        return contactsList;
            
        }
        





}