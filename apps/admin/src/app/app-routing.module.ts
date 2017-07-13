// Global Routing
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })]
})
export class AppRoutingModule {}

