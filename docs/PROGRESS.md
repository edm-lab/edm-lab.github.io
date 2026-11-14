# 진행 현황 (최종 갱신: 2026-11-14 22:20)

## Step 상태
- [x] Step 0 환경·계정 확인, 구 사이트 분석, 개선 제안 (2026-11-14)
- [x] Step 1 새 저장소 생성, Jekyll 골격, Pages 활성화 (2026-11-14)
- [x] Step 1.5 자료 수신 방식(`_inbox/`) 확정, 문서 반영 (2026-11-14)
- [ ] Step 2 디자인 시안(팔레트, 랜딩 + `/professor/`, 사진 없는 상태, 로고 비교, 폰트 로딩 비교)
- [ ] Step 3a 데이터 스키마 확정 + 논문·발표 이관(DOI 조회 포함)
- [ ] Step 3b 교수·연구·강의·연락처·소식 텍스트 이관 + `_inbox/` 자료 처리
- [ ] Step 4 전체 페이지 구현
- [ ] Step 5 품질 점검 + CLAUDE.md 운영 절차 최종화
- [ ] Step 6 정식 오픈(사용자 승인 후에만)

## 중단 지점
- 마지막 작업: Step 1.5 완료. `_inbox/` 생성(로컬 전용, git 제외), CLAUDE.md·PROJECT_BRIEF.md에 자료 수신 방식 반영, 커밋·push 완료
- **다음 시작점: Step 2** (사용자가 진행 지시하면 시작)
- Step 2에서 할 일:
  1. 팔레트 2~3안: 맑은 블루 주색 + 청록·그린 보조색 + 밝은 배경. 각 안의 텍스트·버튼 대비를 WCAG AA 이상으로 확인하고 대비값 표 제시
  2. 랜딩 시안: 소개 → 학생/협업 두 갈래 카드 → 실적 숫자(데이터 자동 집계 구조) → 최신 소식
  3. 서브 1페이지 시안: `/professor/`(교수 소개·CV)
  4. 사진 없는 상태 시안: 교수 사진·연구 이미지·장비 사진이 없을 때의 디자인된 placeholder 또는 사진 없는 레이아웃
  5. 로고 비교: SVG 워드마크 시안과 기존 `EDMlogo.png`를 나란히(비교용으로만 표시하고 사이트에는 쓰지 않음)
  6. 폰트 로딩 비교: Pretendard CDN 방식과 self-host(subset woff2) 방식의 화면·용량·로딩 비교
  7. 각 시안을 PC 1440px·모바일 390px(iframe 방식) 스크린샷으로 보고 → 사용자 선택
  8. 시안은 실제 사이트를 바꾸지 않고 별도 경로(예: `/design/`, noindex)나 로컬에서만 보여 준다. 방식은 Step 2 시작 시 정한다
- 이 세션 메모: 만료된 `GH_TOKEN`이 레지스트리 `HKCU\Environment`에 빈 값으로 남아 있음. 사용자가 직접 삭제하기로 함(아래 참고)

## 확정된 결정 사항
- (2026-11-14) 언어 규칙: 진행 설명·보고·질문·PROGRESS.md·커밋 메시지는 한국어, 명령어·파일명·도구명·기술 용어는 영어 — 사용자 지시
- (2026-11-14) 로컬 저장소 경로 `C:\MyWork\Homepage`(현재 폴더를 저장소로 사용), GitHub 저장소 `edm-lab/edm-lab.github.io` — edm-lab은 개인 계정이며 해당 저장소 미존재 확인(Step 0)
- (2026-11-14) 도구 설치 승인: gh, Ruby+DevKit 3.3(tzinfo-data, wdm, webrick 포함), ImageMagick. 30분 이상 막히면 원인·대안 보고
- (2026-11-14) git 설정은 이 저장소에만(`--local`): user.name `199623191`, user.email `199623191+edm-lab@users.noreply.github.com`
- (2026-11-14) MSE 개인 사진 1차 정리 승인: 대상 목록 사용자 확인 후 MSE main에서 삭제·push. **git 히스토리 완전 정리는 Step 6에서 MSE 저장소를 다시 만드는 방식으로 처리** — 공개 저장소에 개인 사진 노출(Step 0)
- (2026-11-14) 개선 제안 1~7 모두 반영 — Step 0 보고서 근거
  1. DOI: Step 3a에서 Crossref 조회, 확인된 것만 입력, 못 찾은 건 TODO. 입력 전 매칭 결과 표 제시
  2. 소식은 `_news/` 컬렉션(1건 = Markdown 1파일)
  3. 랜딩: 소개 → 학생/협업 두 갈래 카드 → 실적 숫자 자동 집계 → 최신 소식
  4. 연구: 수소/부식 2그룹, `/research/` 한 페이지 앵커 방식
  5. noindex는 meta 태그로만(robots.txt Disallow 금지)
  6. Step 3을 3a(스키마 + 논문·발표)와 3b(나머지 + 이미지)로 분할
  7. 로고: Step 2에서 SVG 워드마크 시안과 기존 로고를 나란히 비교
- (2026-11-14) 영문 연구실명은 확정 전까지 "Environmental Durability Metals Laboratory" 사용
- (2026-11-14) 데이터 오류 질문과 교수 이름 표기 목록 확인은 Step 3a에서 일괄 진행
- (2026-11-14) MSE 개인 사진 18개 삭제 완료(MSE `8356d72`). 남은 작업: Step 6에서 MSE 저장소 재생성으로 git 히스토리 정리
- (2026-11-14) 사이트 구조: 페이지 파일은 `pages/*.md`(permalink 지정), UI 문자열은 `_data/ui/<lang>.yml`, 연구실 기본 정보는 `_data/site.yml`, noindex 스위치는 `_config.yml`의 `noindex` — Step 1 구현
- (2026-11-14) Pages 빌드 방식: legacy(브랜치 `main` 루트) — 브리프의 Actions 미사용 원칙
- (2026-11-14) 줄바꿈 LF 통일(`.gitattributes`) — Windows 전역 autocrlf 경고 제거
- (2026-11-14) **구 사이트 이미지는 전부 사용하지 않는다**(연구 도식 `sector*` 포함). 학교 로고, 연구실·장비 사진, 인물 사진, 연구 도식은 모두 사용자가 새로 제공 — 사용자 지시. 구 사이트에서는 텍스트만 이관
- (2026-11-14) 자료 수신 방식: `_inbox/`(하위 폴더 `profile/`, `research/`, `members/`, `facilities/`, `news/`, `logo/`는 선택). 처리 전 "파일 | 판단한 용도 | 저장 경로 | 연결할 데이터 항목 | 비고" 표로 확인을 받고, 불명확하면 질문. 변환 결과는 `assets/images/<분류>/`, 원본은 `_inbox/_done/YYYY-MM-DD/`. `_inbox/`는 `.gitignore` — 사용자 지시
- (2026-11-14) 사진이 없어도 레이아웃이 자연스러워야 함(디자인된 placeholder 또는 사진 없는 레이아웃). Step 2 시안에 포함 — 사용자 지시
- (2026-11-14) 모바일 스크린샷은 폭 390px iframe 방식으로 찍는다(Step 1 제안 a 승인)
- (2026-11-14) Pretendard 로딩은 Step 2에서 CDN 방식과 self-host 방식을 비교해 결정(Step 1 제안 b)
- (2026-11-14) Step 2 서브 페이지 시안은 `/professor/`

## 미결 사항 / 사용자 제공 대기 자료
- 영문 연구실명 확정("Metals" vs "Metallic material")
- **이미지 최적화 스크립트(`scripts/`) 작성 시점 — 제안, 승인 대기**: Step 2에서 시안이 선택된 직후 Step 2 마무리 작업으로 만든다. 근거: 이미지 비율·크기 규칙(인물 3:4, 연구 카드 16:10 등)이 Step 2 레이아웃에서 정해지므로 그 직후가 가장 정확하다. `_inbox/`에 자료가 그보다 먼저 들어오면 그 시점에 앞당겨 만든다
- 사용자 제공 대기 자료(모두 `_inbox/`로):
  - 로고: 학교 로고(가능하면 SVG/AI/고해상도 PNG), 연구실 로고 사용 여부(Step 2 비교 후 결정)
  - 인물: 교수 고해상도 사진, 재학생 사진·명단
  - 연구: 5개 연구 주제의 도식·이미지(구 사이트 `sector*` 대체)
  - 시설: 실제 연구실·장비 사진과 장비 목록
  - 강의: 과목별 학기·대상(학부/대학원)·소개
  - 수행 과제(projects)·협력 기관
- 구 사이트 데이터 오류 확인(Step 3a): 국제논문 (29) 연도, (25) "Accepted and in proof", (19) 학술지명 잘림, (26)(27) 권호 누락, 국제발표 (21) Melbourne/Austria, 국내발표 (33)에 다른 항목 혼입
- 교수 이름 표기 목록 확인(Step 3a): Hye-Jin Kim, Hyejin Kim, HyeJin Kim, Hye-jin Kim, Hye Jin Kim, Kim Hye Jin, Hye-Jin KIM, 김혜진 등

## 참고
- 구 사이트 clone(텍스트 이관 원본): `C:\MyWork\MSE-old`
- 스크린샷: `tmp/screenshots/`(git 제외). 390px 모바일은 iframe 방식(`tmp/frame-*.html` 참고)
- 이 PC 환경 메모: gh는 keyring 인증(edm-lab). 이 저장소와 `MSE-old`는 credential helper를 `gh auth git-credential`로 설정함. 레지스트리 `HKCU\Environment`의 빈 `GH_TOKEN` 항목은 사용자가 직접 삭제(2026-11-14 안내)
