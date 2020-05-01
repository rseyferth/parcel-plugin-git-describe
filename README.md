# parcel-plugin-git-describe
A parcel plugin that adds the git description to the environment.
The output of `git describe` is made available in the `GIT_DESCRIBE` environment variable.

## Installation
using npm:
```shell
npm i parcel-plugin-git-describe -D
```
using yarn:
```shell
yarn add parcel-plugin-git-describe --dev
```

## Usage
```javascript
const version = process.env.GIT_DESCRIBE;
```
