import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController) {}

  doAlert() {
    let alert = this.alertCtrl.create({
        title: 'Basic Alert',
        subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        buttons: ['Ok']
      });

    alert.present();
  }

  doConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Alert',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    alert.present();
  }

  doPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Prompt Alert',
      message: 'Enter a name for this new album you\'re so keen on adding',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data: any) => {
            console.log('Saved clicked');
          }
        }
      ]
    });

    alert.present();
  }

  doRadio() {
    let alert = this.alertCtrl.create({
      title: 'Redio Alert',
      inputs: [
        {
          type: 'radio',
          label: 'Blue',
          value: 'blue',
          checked: true
        },
        {
          type: 'radio',
          label: 'Green',
          value: 'green'
        },
        {
          type: 'radio',
          label: 'Red',
          value: 'red'
        },
        {
          type: 'radio',
          label: 'Yellow',
          value: 'yellow'
        },
        {
          type: 'radio',
          label: 'Purple',
          value: 'purple'
        },
        {
          type: 'radio',
          label: 'White',
          value: 'white'
        },
        {
          type: 'radio',
          label: 'Black',
          value: 'black'
        }
      ],
      buttons : [
        {
          text: 'Cancel'
        },
        {
          text: 'Ok',
          handler: (data: any) => {
            console.log('Radio data:', data);
          }
        }
      ]
    });

    alert.present();
  }

  doCheckbox() {
    let alert = this.alertCtrl.create({
      title : 'Checkbox Alert',
      inputs: [
        {
          type: 'checkbox',
          label: 'Alderaan',
          value: 'value1',
          checked: true
        },
        {
          type: 'checkbox',
          label: 'Bespin',
          value: 'value2'
        },
        {
          type: 'checkbox',
          label: 'Coruscant',
          value: 'value3'
        },
        {
          type: 'checkbox',
          label: 'Endor',
          value: 'value4'
        },
        {
          type: 'checkbox',
          label: 'Hoth',
          value: 'value5'
        },
        {
          type: 'checkbox',
          label: 'Jakku',
          value: 'value6'
        },
        {
          type: 'checkbox',
          label: 'Naboo',
          value: 'value7'
        },
        {
          type: 'checkbox',
          label: 'Takodana',
          value: 'value8'
        },
        {
          type: 'checkbox',
          label: 'Tatooine',
          value: 'value9'
        }
      ],
      buttons : [
        {
          text : 'Cancel'
        },
        {
          text : 'Okay',
          handler: (data: any) => {
              console.log('Checkbox data:', data);
          }
        }
      ]
    });

    alert.present();
  }
}
