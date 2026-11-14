# 진행 현황 (최종 갱신: 2026-11-14 21:50)


## Step 상태
- [x] Step 0 환경·계정 확인, 구 사이트 분석, 개선 제안 (2026-11-14)
- [x] Step 1 새 저장소 생성, Jekyll 골격, Pages 활성화 (2026-11-14)
- [ ] Step 2 디자인 시안(팔레트 2~3안, 랜딩 + 서브 1페이지, 로고 비교)
- [ ] Step 3a 데이터 스키마 확정 + 논문·발표 이관(DOI 조회 포함)
- [ ] Step 3b 교수·연구·강의·연락처·소식 이관 + 이미지 최적화
- [ ] Step 4 전체 페이지 구현
- [ ] Step 5 품질 점검 + CLAUDE.md 운영 절차 최종화
- [ ] Step 6 정식 오픈(사용자 승인 후에만)

## 중단 지점
- 마지막 작업: Step 1 완료(저장소 생성·골격 push·Pages 배포·라이브 경로 확인). MSE 개인 사진 18개 삭제 push(8356d72), 라이브 404 확인
- 다음 할 일: 사용자 승인 후 Step 2(팔레트 2~3안, 랜딩 + 서브 1페이지 레이아웃, SVG 워드마크 vs 기존 로고 비교)

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

## 미결 사항 / 사용자 제공 대기 자료
- 영문 연구실명 확정("Metals" vs "Metallic material")
- 교수 고해상도 사진, 실제 연구실·장비 사진
- 강의별 학기·대상, 재학생 명단, 수행 과제(projects)
- 구 사이트 데이터 오류 확인(Step 3a): 국제논문 (29) 연도, (25) "Accepted and in proof", (19) 학술지명 잘림, (26)(27) 권호 누락, 국제발표 (21) Melbourne/Austria, 국내발표 (33)에 다른 항목 혼입
- 교수 이름 표기 목록 확인(Step 3a): Hye-Jin Kim, Hyejin Kim, HyeJin Kim, Hye-jin Kim, Hye Jin Kim, Kim Hye Jin, Hye-Jin KIM, 김혜진 등

## 참고
- 구 사이트 clone(이관 원본): `C:\MyWork\MSE-old`
- 스크린샷: `tmp/screenshots/`(git 제외). headless Chrome은 최소 창 폭이 약 500px이라, 390px 모바일은 iframe(390px)에 넣어 찍고 잘라낸다(`tmp/frame-*.html` 참고)
- 이 PC 환경 메모: 사용자 환경변수의 만료된 `GH_TOKEN`을 2026-11-14에 삭제함. gh는 keyring 인증(edm-lab). 저장소마다 credential helper를 `gh auth git-credential`로 설정함
