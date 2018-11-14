# MyAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Features

1. 登入頁面使用雙向綁定name。
2. 點擊快速登入後使用routerLink傳遞name進行component間的溝通。
3. User頁面利用Observable/subscribe設定倒數定時器，倒數結束跳轉至首頁。
4. 利用Observable/subsribe完成auto complete(wiki api)。

## Issues
1. rxjs fromEvent invalid event target <br>
reason: The problem is the lifecycle hook you're using. The element is not yet creating in DOM when ngOnInit() is called. <br>
solution: Use ngAfterViewInit() instead.<br>
source: https://stackoverflow.com/questions/42454740/angular-2-subscribing-to-observable-fromevent-error-invalid-event-target

2. Property 'value' does not exist on type 'EventTarget'.<br>
reason: You need to explicitly tell TypeScript the type of the HTMLElement which is your target.<br>
solution: 1. (<HTML??ELEMENT>e.target).value 2. Use e.target['value'] instead.<br>
source:　https://stackoverflow.com/questions/42066421/property-value-does-not-exist-on-type-eventtarget