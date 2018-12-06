# Next.js TypeScript Starter Kit [![CircleCI](https://circleci.com/gh/deptno/next.js-typescript-starter-kit.svg?style=svg)](https://circleci.com/gh/deptno/next.js-typescript-starter-kit)

![samples](assets/samples.png)

It has applied React 16.7.0-alpha2 and FunctionComponenet style.
Start with sample

### Latest update
- **REMOVED storybook** (conflict with TypeScript, Next), you can use via old version [v6.0.1](https://github.com/deptno/next.js-typescript-starter-kit/releases/tag/6.0.1)
- typescript@3.1.5, next@7.0.2, react@16.6
- applied postcss-preset-env
- add favicon.ico

> see **[ChangeLog](CHANGELOG.md)**

## Feature
 - TypeScript
 - Styled-jsx
 - Module css **(PostCSS - cssnext, nested, import)**
 - SEO & analytics(Google Analytics, Facebook Pixel, <s>Naver Analytics</s>)
 - ~~Storybook **(support module css)**~~
 - Jest & Enzyme **(support module css)**

### Load from CDN
 - font-awesome@5

## Installation

```sh
git clone https://github.com/deptno/next.js-typescript-starter-kit my-project
cd my-project
rm -r .git
yarn
```

## Run :rocket:

#### :rocket: Test
```bash
yarn test # test
yarn test:watch
yarn test:coverage # report coverage
```

<details><summary>~~:rocket: StoryBook~~</summary>
<p>

#### :rocket: StoryBook
```bash
yarn storybook # open browser localhost:6006
```

```bash
yarn build-storybook # Build storybook static assets
```

</p>
</details>

### :rocket: Development

```bash
yarn start:dev # run
```

### :rocket: Production

#### Serve
```bash
yarn
yarn build # create .next directory
yarn start # start server
```

#### Build static HTML
```bash
yarn
yarn build # create .next directory
yarn export # create .out directory
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

### Related

- [typescript-monorepo-next-example](https://github.com/deptno/typescript-monorepo-next-example) - Next.js version
