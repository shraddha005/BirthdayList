/*
Author : Shraddha Kamble

*/
import { LightningElement, track } from 'lwc';
import getContactNamesForBirthdayList from "@salesforce/apex/birthdayListController.getContactNamesForBirthdayList";
import getContacts from "@salesforce/apex/birthdayListController.getContacts";


export default class BirthdayList extends LightningElement {
@track selectedMonth = 'January';
@track contactsNames = [];
@track showError =false;
@track showTable = true;
@track showError1;
@track showTable1;
@track contactsNames1 = [];

 connectedCallback() {
 
    this.fetchContacts();
    console.log("CALLING F1");
  this.fetchAnniversaries();

    setInterval(() => {
        this.fetchContacts();
       this.fetchAnniversaries();

    }, 1000 * 60);
  }

get monthOptions() {
    return[
             { label: 'January', value: 'January' },     
             { label: 'February', value: 'February' },
             { label: 'March', value: 'March' },
             { label: 'April', value: 'April' },
             { label: 'May', value:  'May' },
             { label: 'June', value:  'June' }, 
             { label: 'July', value: 'July' },
             { label: 'August', value: 'August'  },
             { label: 'September', value: 'September' },
             { label: 'October', value: 'October'  },
             { label: 'November', value: 'November' },
             { label: 'December', value:  'December'  },
           ];
}

fetchContacts() {
    getContactNamesForBirthdayList({selectedMonthInt : this.selectedMonth})
      .then(result => {
        if (result) {
         
          this.contactsNames = result;
          console.log("result:"+result);
         
          if(result.length === 0)
          {
             this.showError = true;
             this.showTable = false;
          }
        }
      })
      .catch(error => {
        console.error("Error in fetching contact" + error);
      });
  }
  fetchAnniversaries() {
    getContacts({selectedMonthInt : this.selectedMonth})
      .then(result1 => {
        if (result1) {
         
          this.contactsNames1 = result1;
          console.log("result1:"+result1);
     console.log("date :"+result1[0].Name);
          if(result1.length === 0)
          {
             this.showError1 = true;
             this.showTable1 = false;
          }
          else{
            this.showError1 = false;
             this.showTable1 = true;
          }
        }
      })
      .catch(error => {
        console.error("Error in fetching contact 1" + error);
      
      });
  }
handleChange(event) {
        this.selectedMonth = event.detail.value;
     }
}