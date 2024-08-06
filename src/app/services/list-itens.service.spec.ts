import { TestBed } from '@angular/core/testing';

import { ListItensService } from './list-itens.service';

describe('ListItensService', () => {
  let service: ListItensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListItensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
