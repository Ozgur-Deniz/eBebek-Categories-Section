import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTagsComponent } from './header-tags.component';

describe('HeaderTagsComponent', () => {
  let component: HeaderTagsComponent;
  let fixture: ComponentFixture<HeaderTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
