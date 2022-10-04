import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/shared/models/persona';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-add-cuidado',
  templateUrl: './add-cuidado.component.html',
  styleUrls: ['./add-cuidado.component.scss']
})
export class AddCuidadoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  personas!: Persona[];

  parentSelected!: Persona;

  caretakerSelected!: Persona;

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      parent: [null, [Validators.required]],
      caretaker: [null, [Validators.required]],
      beginning: [null, [Validators.required]],
      duration: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      description: [null, [Validators.maxLength(150)]]
    });
    this.getPersonas();
  }

  getPersonas() {
    this.apiService.getPersonas().subscribe(
      (resp: Persona[]) => {
        this.personas = resp;
      }
    )
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
