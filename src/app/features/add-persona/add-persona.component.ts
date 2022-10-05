import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.scss']
})
export class AddPersonaComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      parent: [null, [Validators.required, Validators.minLength(2)]]
    });
  }

  saveDetails(form: any) {
    this.apiService.savePersona(this.form.controls?.['parent']?.value).subscribe(
      () => {
          alert('Los datos se han enviado correctamente');
          this.router.navigate(['panel']);
        }
      );
  }

  goBack() {
    this.router.navigate(['panel']);
  }


}
