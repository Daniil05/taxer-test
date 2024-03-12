import { Component, EventEmitter, Output } from '@angular/core';
import * as ASN1 from '@lapo/asn1js';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { CertificateModel } from '../../../models/certificate-model';
import { certificateParams } from '../../../constants/const';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.scss']
})
export class AddCertificateComponent {

  public isMultiple: boolean = false;

  @Output() public onSaveCertificate: EventEmitter<CertificateModel> = new EventEmitter<CertificateModel>();

  loadFile(files: NgxFileDropEntry[]) {
    for ( const droppedFile of files ) {
      if ( droppedFile.fileEntry.isFile ) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.blobToBinary(file);
        });
      }
    }
  }

  blobToBinary(blob: any) {
    const reader: any = new FileReader();

    reader.onload = () => {
      const result: any = ASN1.decode(reader.result);
      if ( result.typeName() !== 'SEQUENCE' ) {
        throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
      }
      const tbsCertificate = result.sub[ 0 ].toPrettyString().split('\n');
      const certificate = {
        issuerName: this.findDataFromSequence(tbsCertificate, certificateParams.commonName, 0),
        commonName: this.findDataFromSequence(tbsCertificate, certificateParams.commonName, 1),
        validFrom: this.findDataFromSequence(tbsCertificate, certificateParams.date, 0),
        validTo: this.findDataFromSequence(tbsCertificate, certificateParams.date, 1),
      };
      this.onSaveCertificate.emit(certificate);
    };
    reader.readAsBinaryString(blob);
  }

  findDataFromSequence(tbsCertificate: string[], param: string, index: number) {
    let value: string = '';
    const findFrom: string[] = tbsCertificate.filter((row: string) => row.includes(param));
    let currentIndex = tbsCertificate.findIndex(string => string.includes(findFrom[ index ]));

    if ( param === certificateParams.commonName ) {
      currentIndex += 1;
    }
    value = tbsCertificate[ currentIndex ].split(':')[ 1 ].trim();

    if ( param === certificateParams.date ) {
      value = value.split(' ')[ 0 ].trim();
    }
    return value;
  }
}
