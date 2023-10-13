# 규칙

- Next.js 13 버젼
- 파일명 : 케밥 케이스(kebab-case) - 전체 소문자 사용, 각 단어를 하이픈(-)으로 연결하여 작성
- 디렉토리명 : 케밥 케이스(kebab-case) - 전체 소문자 사용, 각 단어를 하이픈(-)으로 연결하여 작성

## 커밋 가이드

- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Build : 빌드 관련 수정
- !BREAKING CHANGE : 커다란 API 변경의 경우
- !HOTFIX : 급하게 치명적인 버그를 고쳐야하는 경우
- Style : 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- Refactor : 기능의 변화가 아닌 코드 리팩토링
- Comment : 필요한 주석 추가 및 변경
- Docs : 문서 수정
- Test : 테스트 코드 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
- Chore : 빌드 테스트 업데이트, 패키지 매니저를 설정, 기타 변경 사항
- Rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- Remove : 파일을 삭제하는 작업만 수행한 경우

### 커밋 형식

- `Feat: Add Login page`
- `"커밋 유형" : "작업한 내역"`

.prettier
{
"printWidth": 80, // 한 줄의 라인 수
"tabWidth": 2, // tab의 너비
"useTabs": false, // tab 사용 여부
"semi": true, // ; 사용 여부
"singleQuote": true, // 'string' 사용 여부
"quoteProps": "consistent", // 객체 property의 따옴표 여부
"trailingComma": "all", // 끝에 , 사용 여부
"bracketSpacing": true, // Object literal에 띄어쓰기 사용 여부 (ex: { foo: bar })
"arrowParens": "always", // 함수에서 인자에 괄호 사용 여부 (ex: (x) => y)
"endOfLine": "lf" // 라인 엔딩 지정
}

//수정테스트222222
