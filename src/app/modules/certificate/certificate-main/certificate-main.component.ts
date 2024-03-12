import { Component, OnInit } from '@angular/core';
import { CertificateModel } from '../../../models/certificate-model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-certificate-main',
  templateUrl: './certificate-main.component.html',
  styleUrls: ['./certificate-main.component.scss']
})
export class CertificateMainComponent implements OnInit {

  public certificates: CertificateModel[] = [];
  public activeCertificate: CertificateModel | null = null;
  public activeCertificateIndex: number | null = null;
  public showNewCertificate: boolean = false;

  constructor(private _localStorageService: LocalStorageService) {

  }

  ngOnInit() {
    this.certificates = this._localStorageService.getFromLS('certificates');
  }

  addCertificate(certificate: CertificateModel) {
    this.certificates.push(certificate);
    this._localStorageService.writeToLS(this.certificates, 'certificates');
    this.setActive(certificate, this.certificates.length - 1);
  }

  setActive(certificate: CertificateModel, index: number) {
    this.showNewCertificate = false;
    this.activeCertificate = certificate;
    this.activeCertificateIndex = index;
  }

  showNewCertificateForm() {
    this.showNewCertificate = !this.showNewCertificate;
    this.activeCertificate = null;
    this.activeCertificateIndex = null;
  }
}
