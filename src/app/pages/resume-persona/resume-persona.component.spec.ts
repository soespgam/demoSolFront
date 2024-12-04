import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePersonaComponent } from './resume-persona.component';

describe('ResumePersonaComponent', () => {
  let component: ResumePersonaComponent;
  let fixture: ComponentFixture<ResumePersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumePersonaComponent]
    });
    fixture = TestBed.createComponent(ResumePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
