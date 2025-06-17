import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// 1. 基础 Subject
const subject = new Subject<number>();
subject.subscribe(value => console.log('观察者A:', value));
subject.subscribe(value => console.log('观察者B:', value));
subject.next(1); // 两个观察者都会收到 1
subject.next(2); // 两个观察者都会收到 2

// 2. BehaviorSubject
const behaviorSubject = new BehaviorSubject<number>(0); // 初始值为0
behaviorSubject.subscribe(value => console.log('观察者A:', value)); // 立即收到 0
behaviorSubject.next(1); // 收到 1
behaviorSubject.subscribe(value => console.log('观察者B:', value)); // 立即收到 1

// 3. ReplaySubject
const replaySubject = new ReplaySubject<number>(2); // 保存最近2个值
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.subscribe(value => console.log('观察者:', value)); // 收到 2, 3

// 4. AsyncSubject
const asyncSubject = new AsyncSubject<number>();
asyncSubject.subscribe(value => console.log('观察者:', value));
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.complete(); // 观察者只收到 3