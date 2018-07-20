import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from './models/post.model'

import { GetDataService } from './get-data.service';

describe('GetDataService', () => {
  let service: GetDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetDataService]
    });

    service = TestBed.get(GetDataService);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should give me back posts from the API via GET', () => {
    const somePosts: Post[] = [
      { userId: '1', id: 1, title: 'Some title', body: 'Here we have some item' },
      { userId: '2', id: 2, title: 'Second some title', body: 'Here we have the second item' },
    ];

    service.getPosts().subscribe(items => {
      expect(items.length).toBe(2);
      expect(items).toEqual(somePosts);
    });

    const request = httpMock.expectOne(`${service.URL}/posts`);

    expect(request.request.method).toBe('GET');

    request.flush(somePosts);

  });

});
