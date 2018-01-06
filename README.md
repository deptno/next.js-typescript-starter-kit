# next.js-typescript-boilerplate

next.js integrated with typescript

## feature

### support
 - :tada: styled-jsx
 - SEO & analytics(Google Analytics, Facebook Pixel, Naver Analytics)

### integration
 - next@4
 - react@16
 - redux-thunk
 - react-ga
 - redux-persist@4

### using cdn
 - bootstrap@4.0.0-beta.2
 - font-awesome@4.7

## installation

```sh
git clone https://github.com/deptno/next.js-typescript-boilerplate
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

---

## changelog

### 4.1.4

- update packages
  - next@4.1.4
  - react@1.6.1
  - react-dom@1.6.1
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
npm run ts:compile # run typescript compiler ts -> js or use IDE compile(recoommended)
npm run dev # run
```

#### webstorm

##### Editor > Code Style > TypeScript > Tab and Indents

Tab size: `2`  
Indent: `2`  
Continuation indent: `2`

##### Editor > Code Style > TypeScript > Punctuation

`Don't use` semicolon to terminate statements `always`  
Use `single` quotos `always`  
Trailing comma: `Keep`

##### Editor > Code Style > TypeScript > Others

Align 'var' statements and assignments  
`Align multiple 'var' statements and assignments`

Comments Code  
`Line comments at first column`

##### Languages & Frameworks > TypeScript
 
Compiler  
`Enable TypeScript Compiler`

### production

```
npm install
npm run ts:compile # run typescript compiler ts -> js
npm run build # create .next directory
npm start # start server
```

## license

MIT
