# Next.js TypeScript Starter Kit [![CircleCI](https://circleci.com/gh/deptno/next.js-typescript-starter-kit.svg?style=svg)](https://circleci.com/gh/deptno/next.js-typescript-starter-kit)

## Feature
 - TypeScript
 - Styled-jsx
 - Module css **(PostCSS - cssnext, nested)**
 - SEO & analytics(Google Analytics, Facebook Pixel, <s>Naver Analytics</s>)
 - Storybook **(support module css)**
 - Jest & Enzyme **(support module css)**

### Packages
 - next@6
 - react@16
 - redux-thunk
 - react-ga
 - redux-persist@4

### Load from CDN
 - bootstrap@4
 - font-awesome@5

## Installation

```sh
git clone https://github.com/deptno/next.js-typescript-starter-kit my-project
cd my-project
rm -r .git
```

## Configuration

Set SEO & analytics variables

> src/constants/env.ts

```typescript
export const GA_TRACKING_ID = ''
export const FB_TRACKING_ID = ''
export const SENTRY_TRACKING_ID = ''

// for meta tag <og & twitter>
export const SITE_NAME = ''
export const SITE_TITLE = ''
export const SITE_DESCRIPTION = ''
export const SITE_IMAGE = ''
```

If each variable evaluated false, it does not load related library

## Usage

### Module CSS ([src/components/Home.tsx](src/components/Home.tsx))

```typescript jsx
import * as classnames from 'classnames'
import * as css from './Home.css'

export const Just = props => <div className={css.className}>
export const Mixed = props => <div className={classnames('row', 'home', css.home)}>
```

### Styled-jsx

#### Global scope ([src/components/Layout.tsx](src/components/Layout.tsx))

```typescript jsx
const Layout = props =>
  <head>
    <style jsx global>{`
      div > * {
        font-size: 32px;
      }
    `}
    </style>
  </head>
```

#### Local scope ([src/components/Home.tsx](src/components/Home.tsx))

```typescript jsx
export const Home = props =>
  <div>
    <style jsx>{`{
      color: darkred;
    }`}</style>
    home
  </div>
```

#### Others

- styled-jsx/css [issue#2](https://github.com/deptno/next.js-typescript-starter-kit/issues/2)
- external css, module [issue#3](https://github.com/deptno/next.js-typescript-starter-kit/issues/3)

---

## [Changelog](CHANGELOG.md)
