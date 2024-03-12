import { Injectable } from '@angular/core';
import { CertificateModel } from "../../../models/certificate-model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getFromLS(param: string) {
    return localStorage.getItem(param) ? JSON.parse(localStorage.getItem(param) || '') : [];
  }

  writeToLS(data: CertificateModel[], param: string){
    localStorage.setItem( param, JSON.stringify( data ) );
  }
}
