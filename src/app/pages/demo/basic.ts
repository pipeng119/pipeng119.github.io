import { Directive } from "@angular/core";
import { Subject } from "rxjs";

@Directive()
export class CancelSubject {
  constructor() {
  }
  cancelStream(...query: Subject<any>[]): void {
    query.forEach(sub => {
      sub.next();
      sub.complete();
      console.log('销毁流')
    })
  }
}
