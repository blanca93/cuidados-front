import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Cuidado } from 'src/app/shared/models/cuidado';
import { Router } from '@angular/router';
import { Balance } from 'src/app/shared/models/balance';
import { MinutesToHoursPipe } from 'src/app/shared/pipes/minutes-to-hours.pipe';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  providers: [ MinutesToHoursPipe ]
})
export class PanelComponent implements OnInit {

  dataSource!: Cuidado[];
  balances!: Balance[];

  constructor(private apiService: ApiService, private router: Router, private m2h: MinutesToHoursPipe) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getCuidados().subscribe(
      (resp: Cuidado[]) => { this.dataSource = resp; }
    );
    this.apiService.getBalance().subscribe(
      (resp: Balance[]) => { this.balances = resp; }
    )
  }

  goToAddCuidado() {
    this.router.navigate(['add-cuidado']);
  }

  goToAddPersona() {
    this.router.navigate(['add-persona']);
  }

}
