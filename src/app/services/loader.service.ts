import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();

  show() {
    console.log('true')
    this.loading.next(true);
  }

  hide() {
    console.log('false')
    setTimeout(() => {
      this.loading.next(false);
    },3000)
  }

}
