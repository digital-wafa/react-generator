![wafa react generator config](images/logo.png)
# react-generator  ![npm version](https://img.shields.io/npm/v/@digital-wafa/react-generator)

A shared react components generator to use in digital wafa projects

***

## Installing

```
npm install @digital-wafa/react-generator --save-dev
```

## Generate a reusable component

```
rg-component
```

## Configuration

Create a react-generator-config.js at the root of your project to override default config.

### Default configuration

``` javascript
module.exports = {
  projectName: 'default',
  typescript: true
};
```

## This generator allows to create two kind of React components (Smart & Dump)

Component folder structure :

```
index.{ts|js}
<Component name>.module.css
<Component name>.test.js
<Component name>.{tsx|jsx}
```

Container folder structure :

```
index.{ts|js}
<Component name>.module.css
<Component name>.slice.{ts|js}
<Component name>.test.js
<Component name>.{tsx|jsx}
```
