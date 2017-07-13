// Manage app states
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from  '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { ActionReducer, combineReducers } from '@ngrx/store'

// import * as name from somewhere    somewhere must export states
// import * as another name form somewhere

export interface State {
  // name: name.State;
  // anothername: anothername.State;
}

const reducers = {
  // name: name.reducer,
  // anothername: anothername.reducer   somewhere must export reducer function
}

const reducer: ActionReducer<State> = combineReducers(reducers)

export function Reducer(state: any, action: any) {
  return reducer(state, action)
}

@NgModule({
  imports: [
    StoreModule.provideStore(Reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // EffectsModule.run(someEffects),
    // EffectsModule.run(anotherEffects),
    // ...
  ]
})
export class AppStoreModule {}
