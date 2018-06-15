# next.js-typescript-starter-kit [![CircleCI](https://circleci.com/gh/deptno/next.js-typescript-starter-kit.svg?style=svg)](https://circleci.com/gh/deptno/next.js-typescript-starter-kit)

next.js integrated with typescript

## feature

### support
 - :tada: typescript integrated
 - storybook support(storybook doesn't share webpack config with next.js)
 - styled-jsx
 - SEO & analytics(Google Analytics, Facebook Pixel, <s>Naver Analytics</s>)
 - jest, enzyme

### integration
 - next@6
 - react@16
 - redux-thunk
 - react-ga
 - redux-persist@4

### using cdn
 - bootstrap@4
 - font-awesome@5

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

#### others

- styled-jsx/css [issue#2](https://github.com/deptno/next.js-typescript-starter-kit/issues/2)
- external css, module [issue#3](https://github.com/deptno/next.js-typescript-starter-kit/issues/3)

---

## [changelog](CHANGELOG.md)

