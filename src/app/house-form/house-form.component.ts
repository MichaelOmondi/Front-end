import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements OnInit {

  form: FormGroup;
  response;
  image;

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      houses:[]
    });
  }

  onFileSelectec(event){
    if(event.target.files.length > 0) {
      const file = event.target.files[0]
    }
  }

}




// ngOnInit() {
//   this.form = this.formBuilder.group({
//     profile: ['']
//   });
// }

// onChange(event) {
//   if (event.target.files.length > 0) {
//     const file = event.target.files[0];
//     this.form.get('profile').setValue(file);
//   }
// }

// onSubmit() {
//   const formData = new FormData();
//   formData.append('file', this.form.get('profile').value);

//   this.uploadService.upload(formData).subscribe(
//     (res) => {
//       this.response = res;
//       this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
//       console.log(res);
//       console.log(this.imageURL);
//     },
//     (err) => {  
//       console.log(err);
//     }
//   );
// }
// }
