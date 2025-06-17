import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// 创建一个Observable
const source$ = of(1, 2, 3, 4, 5);

// 使用pipe进行map和filter操作
const result$ = source$.pipe(
  map(x => x * 2), // 每个值乘以2
  filter(x => x > 5) // 只保留大于5的值
);

// 订阅并输出结果
result$.subscribe({
  next: value => console.log('接收到:', value),
  complete: () => console.log('完成!')
});