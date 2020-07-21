import { LightningElement, track } from 'lwc';
import getContactNamesForBirthdayList from "@salesforce/apex/birthdayListController.getContactNamesForBirthdayList";

export default class LightningDropDown extends LightningElement {
@track selectedMonth = 'Jan';
 @track contactsNames = [];

 /*connectedCallback() {
    //get current time
    

    //fetch today's todos from server
    this.fetchContacts();

    //get time periodically after every minute
    setInterval(() => {
        this.fetchContacts();

    }, 1000 * 60);
  }*/
get monthOptions() {
    return[
             { label: 'Jan', value: 'Jan' },     
             { label: 'Feb', value: 'Feb' },
             { label: 'March', value: 'March' },
             { label: 'April', value: 'April' },
           ];
}
/*fetchContacts() {
    getContactNamesForBirthdayList()
      .then(result => {
        if (result) {
          //update todos property with result
          this.contactsNames = result;
          console.log("result:"+result);
        }
      })
      .catch(error => {
        console.error("Error in fetching todo" + error);
      });
  }*/
handleChange(event) {
        this.selectedMonth = event.detail.value;
     }
}