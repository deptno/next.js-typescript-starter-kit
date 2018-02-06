# next.js-typescript-starter-kit

next.js integrated with typescript

## feature

### support
 - :tada: typescript integrated
 - styled-jsx
 - SEO & analytics(Google Analytics, Facebook Pixel, Naver Analytics)

### integration
 - next@5
 - react@16
 - redux-thunk
 - react-ga
 - redux-persist@4

### using cdn
 - bootstrap@4.0.0-beta.2
 - font-awesome@4.7

## installation

```sh
git clone https://github.com/deptno/next.js-typescript-starter-kit
```

## setup

set SEO & analytics variables

> src/constants/env.ts

```typescript
export const DEV = process.env.NODE_ENV !== 'production'

export const GA_TRACKING_ID = ''
export const NA_TRACKING_ID = ''
export const FB_TRACKING_ID = ''
export const SENTRY_TRACKING_ID = ''

// for meta tag <og & twitter>
export const SITE_NAME = ''
export const SITE_TITLE = ''
export const SITE_DESCRIPTION = ''
export const SITE_IMAGE = ''
```

if each variable evaluated false, it does not load related library

## usage

### styled-jsx

#### global scope

[src/components/Layout.tsx](src/components/Layout.tsx)

```typescript jsx
const Layout = props =>
  <head>
    {/*language=PostCSS*/}
    <style jsx global>{`//global stylesheet
      div > * {
        font-size: 32px;
      }
    `}
    </style>
  </head>

```

#### local scope

[src/components/Home.tsx](src/components/Home.tsx)

```typescript jsx
export const Home = props =>
  <div>
    {/*language=PostCSS*/}
    <style jsx>{`{
      color: darkred;
    }`}</style>
    home
  </div>
```

#### other way

- styled-jsx/css [issue#2](https://github.com/deptno/next.js-typescript-starter-kit/issues/2)

---

## changelog

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
  
---

## env

### development

#### installation

```
npm install
npm run dev # run
```

### production

```
npm install
npm run ts:compile # run typescript compiler ts -> js
npm run build # create .next directory
npm start # start server
```

## license

MIT
