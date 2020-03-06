# Repro123

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

This is a repro for [https://github.com/angular/angular/issues/35896](https://github.com/angular/angular/issues/35896)

## Issue details
Upgrading to Angular v9 broke the functionality of `<select>` for us. The `*ngFor` directive we use for populating it with `<option>` elements now all of the sudden re-renders items if you simply refresh the collection with new instances, even if their contents are the same. This resets the selected option, which is not expected and not desirable. This wasn't happening in v8. This isn't happening in v9 either, *unless* `BrowserAnimationsModule` is imported by the `app-module`. This also can be worked around by using `trackBy`, but for that you'd need to track down all the problematic `ngFor` directives after upgrading to v9.

[Click here to see the same v9 repro app in action](https://rsheptolut.github.io/repro123/)
[Same demo working without problems in Angular v8](https://angular-wqxppc.stackblitz.io) - although StackBlitz doesn't have this problem with v9 either (not sure why), but at least helps illustrate how it was working before

The v9 repro is based on `ng new` of Angular CLI 9.0.5. If building yourself, run locally with `ng serve`, because if imported into `StackBlitz`, the issue can't be reproduced.

1. Choose an item in any drop down (the two are linked and simply illustrate the `trackBy` difference)
2. Notice that the first button adds a new item but the selected option doesn't get reset.
3. Clicking the second button though resets the selected option in the first drop down.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


