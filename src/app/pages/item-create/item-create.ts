import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera';
import { Items } from 'src/app/providers';

@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html',
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly items: Items,
    private readonly router: Router // public camera: Camera
  ) {
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      about: [''],
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {}

  getPicture() {
    /*if (Camera["installed"]()) {
      this.camera
        .getPicture({
          destinationType: this.camera.DestinationType.DATA_URL,
          targetWidth: 96,
          targetHeight: 96,
        })
        .then(
          (data) => {
            this.form.patchValue({
              profilePic: "data:image/jpg;base64," + data,
            });
          },
          (err) => {
            alert("Unable to take photo");
          }
        );
    } else {*/
    this.fileInput.nativeElement.click();
    // }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ profilePic: imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')';
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    //this.viewCtrl.dismiss();
  }

  createItem() {}

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    console.log(this.form.value);
    if (!this.form.valid) {
      return;
    }
    this.items.add(this.form.value);
    this.router.navigate(['/pages']);
  }
}
