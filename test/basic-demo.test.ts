import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { of, from, interval, timer, range, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { filter, map, take, toArray } from 'rxjs/operators';

describe('RxJS Observable Creation', () => {
  it('should create Observable using of', async () => {
    const source$ = of(1, 2, 3, 4, 5);
    const result = await source$.pipe(toArray()).toPromise();
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should create Observable using from', async () => {
    const source$ = from([1, 2, 3, 4, 5]);
    const result = await source$.pipe(toArray()).toPromise();
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should create Observable using range', async () => {
    const source$ = range(1, 5);
    const result = await source$.pipe(toArray()).toPromise();
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should create Observable using interval', async () => {
    const source$ = interval(100).pipe(take(3));
    const result = await source$.pipe(toArray()).toPromise();
    expect(result).toEqual([0, 1, 2]);
  });

  it('should create Observable using timer', async () => {
    const source$ = timer(100, 100).pipe(take(3));
    const result = await source$.pipe(toArray()).toPromise();
    expect(result).toEqual([0, 1, 2]);
  });
});
