import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-add-cuidado',
  templateUrl: './add-cuidado.component.html',
  styleUrls: ['./add-cuidado.component.scss']
})
export class AddCuidadoComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      parent: [null, [Validators.required, Validators.minLength(2)]],
      caretaker: [null, [Validators.required, Validators.minLength(2)]],
      beginning: [null, [Validators.required]],
      duration: [null],
      description: [null]
    });
  }

  saveDetails(form: any) {
    this.apiService.saveCuidado(this.form.value).subscribe(
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
