# study_next.js
Learning the basics of next.js based on react

## install next.js

1. 명령어 입력

```bash
npx create-next-app@latest {폴더명}
```

```
√ Would you like to use TypeScript? ... No / Yes # TypeScript 사용여부
√ Would you like to use ESLint? ... No / Yes # ESLint 사용 여부
√ Would you like to use Tailwind CSS? ... No / Yes # Tailwind 사용 여부
√ Would you like your code inside a `src/` directory? ... No / Yes # 대체 폴더 구조 사용 여부
√ Would you like to use App Router? (recommended) ... No / Yes # Router 사용 여부
√ Would you like to use Turbopack for `next dev`? ... No / Yes # Turbopack 사용 여부
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes # alias 사용 여부
```

> `Turbopack`은 기존의 웹팩(Webpack)을 대체할 수 있는 도구이다. `next build` 단계에서는 지원되지 않으며, 일부 기능들도 현재 개발 중에 있으므로 사용하지 않을 것이다.
> `alias`는 next.js에서 import 경로를 간단하게 줄이는 데 사용합니다. 

