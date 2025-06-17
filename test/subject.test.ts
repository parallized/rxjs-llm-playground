import { describe, it, expect } from 'vitest';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject, of } from 'rxjs';
import { filter, map, take, toArray } from 'rxjs/operators';

describe('RxJS Subject', () => {
    it('should work with basic Subject', async () => {
      const subject = new Subject<number>();
      const values: number[] = [];
  
      subject.subscribe(value => values.push(value));
      subject.next(1);
      subject.next(2);
      subject.complete();
  
      expect(values).toEqual([1, 2]);
    });
  
    it('should work with BehaviorSubject', async () => {
      const behaviorSubject = new BehaviorSubject<number>(0);
      const values: number[] = [];
  
      behaviorSubject.subscribe(value => values.push(value));
      behaviorSubject.next(1);
      behaviorSubject.next(2);
  
      expect(values).toEqual([0, 1, 2]);
      expect(behaviorSubject.value).toBe(2);
    });
  
    it('should work with ReplaySubject', async () => {
      const replaySubject = new ReplaySubject<number>(2);
      const values: number[] = [];
  
      replaySubject.next(1);
      replaySubject.next(2);
      replaySubject.next(3);
  
      replaySubject.subscribe(value => values.push(value));
  
      expect(values).toEqual([2, 3]);
    });
  
    it('should work with AsyncSubject', async () => {
      const asyncSubject = new AsyncSubject<number>();
      const values: number[] = [];
  
      asyncSubject.subscribe(value => values.push(value));
      asyncSubject.next(1);
      asyncSubject.next(2);
      asyncSubject.next(3);
      asyncSubject.complete();
  
      expect(values).toEqual([3]);
    });
  });
  
  describe('RxJS Operators', () => {
    it('should work with map and filter', async () => {
      const source$ = of(1, 2, 3, 4, 5);
      const result$ = source$.pipe(
        map(x => x * 2),
        filter(x => x > 5)
      );
  
      const result = await result$.pipe(toArray()).toPromise();
      expect(result).toEqual([6, 8, 10]);
    });
  });