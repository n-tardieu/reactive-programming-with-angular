import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleDialogComponent } from './add-article-dialog.component';

describe('AddArticleDialogComponent', () => {
  let component: AddArticleDialogComponent;
  let fixture: ComponentFixture<AddArticleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
