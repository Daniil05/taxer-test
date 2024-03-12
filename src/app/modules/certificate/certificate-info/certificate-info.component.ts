import { Component, Input } from '@angular/core';
import { CertificateModel } from '../../../models/certificate-model';

@Component({
  selector: 'app-certificate-info',
  templateUrl: './certificate-info.component.html',
  styleUrls: ['./certificate-info.component.scss']
})
export class CertificateInfoComponent {

  @Input() activeCertificate: CertificateModel | null = null;

}
