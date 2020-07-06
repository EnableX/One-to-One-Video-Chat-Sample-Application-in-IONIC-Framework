import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfrencePage } from './confrence.page';

describe('ConfrencePage', () => {
  let component: ConfrencePage;
  let fixture: ComponentFixture<ConfrencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfrencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfrencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
