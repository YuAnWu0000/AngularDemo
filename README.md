# MyAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Features

1. 登入頁面使用雙向綁定name。
2. 點擊快速登入後使用routerLink傳遞name進行component間的溝通。
3. User頁面利用Observable/subscribe設定倒數定時器，倒數結束跳轉至首頁。
4. 利用Observable/subsribe完成auto complete(wiki api)。
5. 殘缺不齊的小畫家功能。
6. User頁面利用Observable/Subject實作文章條件排序功能。

## Issues
1. rxjs fromEvent invalid event target <br>
reason: The problem is the lifecycle hook you're using. The element is not yet creating in DOM when ngOnInit() is called. <br>
solution: Use ngAfterViewInit() instead.<br>
source: https://stackoverflow.com/questions/42454740/angular-2-subscribing-to-observable-fromevent-error-invalid-event-target

2. Property 'value' does not exist on type 'EventTarget'.<br>
reason: You need to explicitly tell TypeScript the type of the HTMLElement which is your target.<br>
solution: 1. (<HTML??ELEMENT>e.target).value 2. Use e.target['value'] instead.<br>
source:　https://stackoverflow.com/questions/42066421/property-value-does-not-exist-on-type-eventtarget<br>

3. Cannot apply css to all child components. <br>
reason: Component styles normally apply only to the HTML in the component's own template.<br>
soluion: Use the /deep/ shadow-piercing descendant combinator to force a style down through the child component tree into all the child component views. The /deep/ combinator works to any depth of nested components, and it applies to both the view children and content children of the component.
source: https://angular.io/guide/component-styles<br>