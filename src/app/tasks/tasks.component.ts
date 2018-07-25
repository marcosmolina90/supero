import { AlertService } from './../shared/alert-service.service';
import { Router } from '@angular/router';
import { BaseRestService } from './../shared/base-rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  list = [];
  view = 'list';

  constructor(private baseRest: BaseRestService,
    private alert: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.baseRest.getter('task', 'get', '').subscribe((data: any) => {
      this.list = data;
    });
  }

  select(id) {
    this.router.navigate(['/task', id]);
  }

  novo() {
    this.router.navigate(['/task', 0]);
  }

  delete(id) {
    console.log('delete');
    this.baseRest.delete('task', '?id=' + id).subscribe((data: any) => {
      this.ngOnInit();
      this.alert.add('Sucesso', 'Task Deletada', 'success');
    });
  }

}
