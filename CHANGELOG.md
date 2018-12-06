# changelog

### 7.0.2
- add favicon
- next@7.0.2
- react@16.7.0-alpha
- typescript@3.2.1

### 7.0.1
- replace npm with yarn in `README.me`
- remove storybook
- apply postcss-preset-env
- typescript@3.1.1
- next@7.0.1
- react@16.5

### 6.1.1
- typescript@3.0.1
- next@6.1.1
- react@16.4

### 6.1.0
- remove bootstrap cdn
- more examples
  - ssr
  - module css
  - style jsx
- next.js way
  -  custom _page.tsx => _app.tsx,

### 6.0.3 fetch
- update postcss
- add postcss-import
- font-awesome@5.1.0
- add module css test env
- update readme
- storybook
  - add head.html to load cdn
  - use @zeit/next-css for module css config 
- update packages
  - typescript@2.9.2
  - @zeit/next-typescript@1.1.0
- fix import stylesheet, using module css
- update cdn
  - bootstrap@4
  - fontawesome@5
- fix storybook not working [issue#14](https://github.com/deptno/next.js-typescript-starter-kit/issues/14)
- update packages
  - storybook@
  - typescript@2.9.1(support jsx generic)

### 6.0.3
- update packages
  - next@6.0.3
  - typescript@2.8.4
  - react@16.4
  - redux@4.0.0
  
### 6.0.1
- unsupport naver analytics(unsafe)
- update packages
  - next@6.0.1
  - typescript@2.8.3
  - ...etc@latest

### 5.1.0
- update packages
  - typescript@2.7.2
  - next@5.1.0
  - ...etc@latest

### 5.0.5
- ci
- fix
  - Layout.tsx global style is not rendered in output <head> [issue#7](https://github.com/deptno/next.js-typescript-starter-kit/issues/7)

### 5.0.4
- update jest config
- scripts
  - `npm run ts:check` # typescript error check
  - `npm run test:watch`
  - `npm run test:coverage`

### 5.0.3
- fix
  - store-reducer connection
- add enzyme
  - scripts
     - `npm run test`
     - `npm run test:watch`
- rename dev script `npm run dev` > `npm run start:dev`

### 5.0.2
- add storybook

### 5.0.1
- name change
  - next.js-typescript-boilerplate -> next.js-typescript-starter-kit

### 5.0.0
- package.json scripts
  - add `export`, to export static assets(MUST run after `npm run build`)
  - remove `ts:compile` script (no more need to run tsc)

- apply new packages
  - @next/next-typescript

- update packages
  - next@5.0.0
  - react@16.2
  - react-dom@16.2
  - typescript@2.7.1

### 4.1.4
- update packages
  - next@4.1.4
  - react@16.1
  - react-dom@16.1
  - typescript@2.6.1
- update packages client load
  - bootstrap@4.0.0-beta.2
- version align with next

