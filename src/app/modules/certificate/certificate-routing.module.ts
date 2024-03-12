import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateMainComponent } from './certificate-main/certificate-main.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateRoutingModule {
}
