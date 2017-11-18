# next.js-typescript-boilerplate

## installation

```bash
wget -qO- https://github.com/deptno/next.js-typescript-boilerplate/archive/master.zip | bsdtar -xf- && mv next.js-typescript-boilerplate-master [your_project]
```

or

```
git clone https://github.com/deptno/next.js-typescript-boilerplate
```

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
npm run tsc # run typescript compiler ts -> js
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
npm run tsc # run typescript compiler ts -> js
npm run build # create .next directory
npm start # start server
```

## license

MIT
