import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './user-detail.component.html'
})
export class AdminDetailComponent implements OnInit {
  public user: Admin = new Admin();
  public errorMessage: string;
  public detailsPageTitle = 'Administrator';
  public detailsPageSubtitle = 'Details about a registered user with role administrator';

  constructor(private route: ActivatedRoute,
              private linguistService: AdminService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.linguistService.getAdmin(id).subscribe(
          linguist => this.user = linguist,
          error => this.errorMessage = <any>error.message);
  }
}
