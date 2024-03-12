import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateMainComponent } from './certificate-main.component';

describe('CertificateMainComponent', () => {
  let component: CertificateMainComponent;
  let fixture: ComponentFixture<CertificateMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateMainComponent]
    });
    fixture = TestBed.createComponent(CertificateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
