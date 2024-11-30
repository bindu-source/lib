import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookUser } from '../models/book-user';
import { BookService } from './BookService';


describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });

    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve books from the API via GET', () => {
    const searchTerm = 'Angular';
    const mockBooks: BookUser[] = [
      { id: 1, title: 'Angular in Action', author: 'Jeff Dickey' },
      { id: 2, title: 'Mastering Angular', author: 'Misko Hevery' }
      // Add more mock books as needed
    ];

    service.searchBooks(searchTerm).subscribe((data) => {
      expect(data).toEqual(mockBooks);
    });

    const req = httpMock.expectOne(`${service.apiUrl}?search=${searchTerm}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockBooks);
  });
});
