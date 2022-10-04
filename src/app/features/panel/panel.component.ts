import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Cuidado } from 'src/app/shared/models/cuidado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  dataSource!: Cuidado[];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getCuidados().subscribe(
      (resp: Cuidado[]) => { this.dataSource = resp; }
    );
  }

  goToAddCuidado() {
    this.router.navigate(['add-cuidado']);
  }

  goToAddPersona() {
    this.router.navigate(['add-persona']);
  }

}
