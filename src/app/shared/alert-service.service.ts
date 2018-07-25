import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertService implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {

  }

  addToast(title, message, type) {
    this.add(title, message, type);
  }


  add(title, message, type) {
    if (type === null || type === 'info') {
      this.toastr.info(title, message);
    } else if (type === 'success') {
      this.toastr.success(title, message);
    } else if (type === 'wait') {
      this.toastr.warning(title, message);
    } else if (type === 'error') {
      this.toastr.error(title, message);
    } else if (type === 'warning') {
      this.toastr.warning(title, message);
    }
  }
}
