import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgifForComponent } from './tab-ngif-for.component';

describe('TabNgifForComponent', () => {
  let component: TabNgifForComponent;
  let fixture: ComponentFixture<TabNgifForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgifForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgifForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
