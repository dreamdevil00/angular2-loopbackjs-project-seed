// App service

import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

@Injectable()
export class AppService {
  constructor(
    private store: Store<any>,
  ) {
    // Here goes your service.  Usually dispatch some actions by store
    // eg.
    // this.store.dispatch({ type: 'SOME_ACTION'})
  }
}
