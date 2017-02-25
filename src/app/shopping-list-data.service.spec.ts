import { TestBed, inject } from '@angular/core/testing';
import { ShoppingListDataService } from './shopping-list-data.service';

describe('ShoppingListDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListDataService]
    });
  });

  it('should ...', inject([ShoppingListDataService], (service: ShoppingListDataService) => {
    expect(service).toBeTruthy();
  }));
});
