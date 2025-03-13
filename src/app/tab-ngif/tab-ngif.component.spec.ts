import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgifComponent } from './tab-ngif.component';

describe('TabNgifComponent', () => {
  let component: TabNgifComponent;
  let fixture: ComponentFixture<TabNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
