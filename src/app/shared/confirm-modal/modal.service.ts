import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { DomService } from './dom.service';
import { Observable } from 'rxjs';

@Injectable()
export class ModalService {

  constructor(private domService: DomService) { }

  private modalElementId = 'confirm-modal-container';
  private overlayElementId = 'overlay';

  public result$: Subject<boolean> = new Subject();

  init(component: any, inputs: object, outputs: object): Observable<boolean> {
    const componentConfig = {
      inputs: inputs,
      outputs: outputs
    };
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
    return this.result$;
  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
  }
}
