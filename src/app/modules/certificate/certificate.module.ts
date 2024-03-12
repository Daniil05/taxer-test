import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateMainComponent } from './certificate-main/certificate-main.component';
import { CertificateRoutingModule } from './certificate-routing.module';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { SharedModule } from '../shared/shared.module';
import { CertificateInfoComponent } from './certificate-info/certificate-info.component';

@NgModule({
  declarations: [
    CertificateMainComponent,
    AddCertificateComponent,
    CertificateInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    CertificateRoutingModule,
    NgxFileDropModule,
  ]
})
export class CertificateModule {
}
