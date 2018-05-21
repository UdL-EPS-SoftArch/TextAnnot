import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Metadatafield} from '../metadatafield';
import { MetadatafieldService } from '../metadatafield.service';

@Component({
  selector: 'app-metadatafield-edit',
  templateUrl: '../metadatafield-form/metadatafield-form.component.html'
})
export class MetadatafieldEditComponent implements OnInit {
  public metadatafield: Metadatafield;
  public errorMessage: string;
  public formTitle = 'Edit metadatafield';
  public formSubtitle = 'Edit the value of a metadatafield';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private metadatafieldService: MetadatafieldService) {
  }

  ngOnInit() {
    this.metadatafield = new Metadatafield();
    const id = this.route.snapshot.paramMap.get('id');
    this.metadatafieldService.get(id).subscribe(
      metadatafield => this.metadatafield = metadatafield);
  }

  onSubmit(): void {
    this.metadatafieldService.update(this.metadatafield)
      .subscribe(
        metadatafield => this.router.navigate([metadatafield.uri]));
  }
}
