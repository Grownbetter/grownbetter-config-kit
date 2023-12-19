# @grownbetter/prettier-config-grownbetter

## Setup

프로젝트 루트에 `.npmrc` 파일을 생성하고 다음을 추가해주세요.

```bash
@grownbetter:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}

```

`zshrc`파일에 전역 변수를 등록합니다.

```bash
vi ~/.zshrc

# TOKEN
export NPM_TOKEN=${NPN_TOKEN} // Github 토큰값 입력
```

## Installation

```bash
npm install @grownbetter/prettier-config-grownbetter --save-dev
```

## Usage

`package.json` 파일의 `scripts` 속성에 다음을 추가해주세요.

```json
{
  "scripts": {
    "prettier": "prettier . --check",
    "prettier:fix": "prettier . --write"
  }
}
```

`.prettierrc` 파일을 생성하고 다음을 추가해주세요.

```js
'@grownbetter/prettier-config-grownbetter';
```

또는 `package.json` 파일에 다음을 추가해주세요.

```json
{
  "prettier": "@grownbetter/prettier-config-grownbetter"
}
```
