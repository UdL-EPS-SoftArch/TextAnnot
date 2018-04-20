import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './user-delete.component.html'
})
export class AdminDeleteComponent implements OnInit {
  public user: Admin = new Admin();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private adminService: AdminService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getAdmin(id).subscribe(
          linguist => this.user = linguist);
  }

  delete() {
    this.adminService.deleteAdmin(this.user).subscribe(
      () => this.router.navigate(['admins']));
  }
}
