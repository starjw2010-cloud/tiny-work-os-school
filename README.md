# Tiny Work OS School

Slack을 처음 배우는 사람들을 위한 작은 용어 학교입니다. Slack Help Center와 Developer Docs를 바탕으로 재구성한 비공식 실무형 교육 사이트이며, 새 사용자·관리자·고객 미팅 담당자가 Slack의 핵심 개념을 실무 언어로 설명할 수 있도록 돕습니다.

## 1. 프로젝트 개요

- 사이트명: Tiny Work OS School
- 부제: Slack을 처음 배우는 사람들을 위한 작은 용어 학교
- 도메인 후보: https://tinyworkos.com/
- GitHub repo 추천명: tiny-work-os-school
- Next.js App Router 기반 정적 콘텐츠 사이트
- TypeScript와 Tailwind CSS 사용
- 외부 AI API, Slack API 호출 없이 정적 데이터로 동작
- Slack 로고나 공식 브랜드 이미지를 사용하지 않는 교육용 Mock UI 포함

## 2. 로컬 실행 방법

```bash
cd /Volumes/jee_insight/codex/tiny-slack-school-clean
npm install
npm run dev
```

검증 명령:

```bash
npm run typecheck
npm run lint
npm run build
```

## 3. 페이지 구조

- `/`: 홈, 학습 트랙, 추천 용어, Mock UI 소개
- `/start`: Slack 시작하기
- `/using`: Slack 사용하기
- `/personal-settings`: 프로필 및 환경설정
- `/automation`: 도구 연결 및 작업 자동화
- `/admin`: 워크스페이스 관리
- `/tutorials`: 튜토리얼과 실습
- `/terms`: 용어 검색과 카테고리 필터
- `/terms/[slug]`: 용어 상세, factStatus, 출처, 교육용 Mock UI
- `/use-cases`: 업무 상황별 사용 예시
- `/quiz`: 정적 객관식 퀴즈
- `/sources`: 공식 출처 목록과 확인 기준

Alias:

- `/roles` → `/admin`
- `/new-users` → `/start`
- `/admins` → `/admin`

## 4. 데이터 구조

주요 타입은 `src/types/content.ts`에 있습니다.

- `Source`: 공식 출처 URL, 카테고리, 확인일, notes
- `LearningPath`: 6개 학습 트랙과 모듈 구조
- `LearningLesson`: 페이지별 학습 카드 데이터
- `Term`: 용어명, 한국어명, 설명, caution, relatedTerms, source, factStatus, screenMockupType
- `UseCase`: 업무 상황별 채널 예시와 운영 팁
- `QuizQuestion`: 정적 객관식 문제와 해설

데이터 파일은 `src/data` 아래에 분리되어 있으며, 나중에 Google Sheets CMS로 옮기기 쉽도록 배열 기반 구조를 유지합니다.

## 5. 공식 출처 관리 방식

모든 용어와 학습 콘텐츠는 가능한 Slack Help Center 또는 Slack Developer Docs URL을 참조합니다.

- 출처 목록: `src/data/sources.ts`
- 용어별 필드: `sourceUrl`, `sourceName`, `lastVerifiedAt`, `factStatus`
- `factStatus`: `verified`, `needs-review`, `unstable`

Slack 기능은 플랜, 관리자 설정, 워크스페이스 정책, Enterprise 조직 설정에 따라 달라질 수 있으므로, 변경 가능성이 높은 항목은 `needs-review` 또는 `unstable`로 유지합니다.

## 6. 브랜드 안전 기준

- Slack 로고와 공식 브랜드 이미지를 사용하지 않습니다.
- 실제 Slack UI를 1:1로 복제하지 않습니다.
- 공식 인증·공식 제공·공식 마스터처럼 공식 제휴로 오해될 수 있는 표현을 사용하지 않습니다.
- 모든 페이지 Footer에 `Not affiliated with Slack Technologies, LLC.` 문구를 표시합니다.
- 이 사이트는 Slack 학습을 돕기 위한 비공식 교육용 자료이며 Slack Technologies, LLC와 공식 제휴 또는 후원 관계가 없습니다.
- 공개 도메인에는 Slack을 직접 넣지 않는 것을 권장합니다. 상표 오해를 줄이고 Work OS 교육 사이트로 확장할 여지를 남기기 위함입니다.

## 7. GitHub repo 생성 방법

추천 repository 이름은 `tiny-work-os-school`입니다.

```bash
gh repo create starjw2010-cloud/tiny-work-os-school --public
```

GitHub CLI가 추가 질문을 하면 빈 repository로 생성합니다. GitHub CLI를 쓰지 않는 경우 GitHub 웹에서 빈 repository를 만든 뒤 아래 remote 연결 단계를 진행합니다.

## 8. Git remote 연결 방법

```bash
git init
git branch -M main
git remote add origin git@github.com:starjw2010-cloud/tiny-work-os-school.git
```

이미 remote가 있다면 아래 명령으로 확인합니다.

```bash
git remote -v
```

## 9. main 브랜치 push 방법

```bash
git add .
git commit -m "Prepare Tiny Work OS School for GitHub Pages"
git push -u origin main
```

## 10. GitHub Pages 설정 방법

1. GitHub repository의 Settings > Pages로 이동합니다.
2. Source를 `GitHub Actions`로 설정합니다.
3. main 브랜치에 push하면 `.github/workflows/deploy-pages.yml` workflow가 실행됩니다.
4. repository 경로 배포 테스트 URL은 https://starjw2010-cloud.github.io/tiny-work-os-school/ 입니다.

현재 workflow는 GitHub Pages repository URL 배포를 위해 `GITHUB_PAGES=true` 환경에서 빌드합니다. 이때 Next.js `basePath`와 `assetPrefix`는 `/tiny-work-os-school`로 설정됩니다.

## 11. GitHub Actions 배포 방식

Workflow는 main 브랜치 push 시 다음 순서로 실행됩니다.

1. checkout
2. setup-node
3. npm ci
4. npm run typecheck
5. npm run lint
6. npm run build
7. `out` 폴더를 GitHub Pages artifact로 업로드
8. GitHub Pages로 deploy

정적 export 설정 때문에 `npm run build` 후 `out` 폴더가 생성됩니다. GitHub Pages에서 Jekyll 처리를 피하기 위해 `public/.nojekyll` 파일을 포함했습니다.

## 12. custom domain 연결 계획

최종 custom domain 후보는 https://tinyworkos.com/ 입니다.

Custom domain으로 배포할 때는 repository 경로용 `basePath`가 필요하지 않습니다. 도메인 연결을 확정하면 workflow의 `GITHUB_PAGES=true` 설정을 제거하거나 별도 deploy target 환경값을 조정한 뒤 빌드합니다.

현재 단계에서는 `public/CNAME` 파일을 추가하지 않았습니다. 도메인 구매와 연결이 확정되면 `public/CNAME` 파일을 만들고 아래 한 줄을 넣습니다.

```text
tinyworkos.com
```

## 13. DNS 설정 안내

- GitHub Pages custom domain은 repository Settings > Pages에서 custom domain으로 설정합니다.
- apex domain을 사용할 경우 DNS provider에서 GitHub Pages용 A 레코드 또는 provider가 지원하는 ALIAS/ANAME 레코드를 설정합니다.
- `www` 서브도메인을 사용할 경우 CNAME 레코드로 GitHub Pages 호스트를 가리킬 수 있습니다.
- GitHub 문서 기준으로 domain verification과 HTTPS 적용 상태를 확인합니다.

## 14. 예상 테스트 URL

- GitHub Pages 기본 URL: https://starjw2010-cloud.github.io/tiny-work-os-school/
- 최종 custom domain 후보: https://tinyworkos.com/

## 15. 배포 전 체크리스트

- [ ] 브랜드명이 `Tiny Work OS School`로 표시되는지 확인
- [ ] Footer 비제휴 문구 확인
- [ ] Slack 로고 또는 공식 브랜드 이미지 미사용 확인
- [ ] `sourceUrl`, `sourceName`, `lastVerifiedAt`, `factStatus` 확인
- [ ] Enterprise Grid가 현재 플랜명처럼 보이지 않는지 확인
- [ ] 외부 AI API와 Slack API 호출 코드 없음 확인
- [ ] `.env`, API Key, 민감정보 파일 없음 확인
- [ ] `node_modules/`, `.next/`, `out/`, `qa-screenshots/`가 git에 포함되지 않는지 확인
- [ ] `npm run typecheck` 통과
- [ ] `npm run lint` 통과
- [ ] `npm run build` 통과

## 16. 참고 문서

- GitHub Pages custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- actions/deploy-pages: https://github.com/actions/deploy-pages
