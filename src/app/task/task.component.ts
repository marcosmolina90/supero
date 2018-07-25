import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './../shared/alert-service.service';
import { BaseRestService } from '../shared/base-rest.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  inscricao: Subscription;
  id;
  task = {};
  status = [];

  myDate2: Date = new Date();
  myDate: Date = new Date();

  closeButton: any = { show: true, label: 'Fechar!', cssClass: 'btn btn-sm btn-primary' };
  nowButton: any = { show: true, label: 'Agora', cssClass: 'btn btn-sm btn-primary' };
  clearButton: any = { show: true, label: 'Limpar', cssClass: 'btn btn-sm btn-primary' };


  constructor(private route: ActivatedRoute,
    private router: Router,
    private baseRestService: BaseRestService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.baseRestService.getter('task', 'getStatus', '').subscribe((data: any) => {
      this.status = data;
    });

    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (!this.id || this.id === '0') {
        this.task = {};
      } else {
        this.baseRestService.getter('task', 'find' , '?id='+this.id).subscribe((data: any) => {
          this.task = data;
        });
        if (!this.task) {
          this.alertService.addToast('Alerta', 'Task (' + this.id + ') não encontrado', 'error');
          this.router.navigate(['/tasks']);
        }
      }
    });
  }

  salvar() {
    this.baseRestService.salvar('task', this.task).subscribe(data => {
      this.task = data;
      this.alertService.add('Sucesso',  'Task Salva com sucesso', 'Success');
    });
  }

}
