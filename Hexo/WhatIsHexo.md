# Hexo

- 마크다운 문서를 page로 변환하여 개인 블로그를 만들어주는 `Node.js` 프레임워크이다.
- Hexo를 이용하면 개인블로그를 `Github Pages` 무료서버에서 쉽게 운영할 수 있다.
- `Github Pages`는 트래픽이 무료로 제공되기 때문에 개인 블로그로 사용하기 좋다.
- `Hexo` 와 비슷하 프레임워크로는 `Rub` (루비언어) 를 사용하는 `Jekyll` 이 있다.

## Hexo 사용

- `Node.js` 와 `git` 설치가 필요하다.

## Hexo 설치

- 프로젝트를 생성할 폴더를 생성하고 이동.
- 터미널에서 프로젝트를 생성할 폴더와 동일한 경로에서 아래의 명령 실행

  - `npm install -g hexo-cli`
  - `hexo init blog`
  - `cd blog`
  - `npm install`
  - `hexo server`
    - Ubuntu를 사용중이라면, 4000번 포트를 포트포워딩 해줘야함
  - `localhost:4000` 주소로 접근했을 때 화면이 나오면 설치성공

  - OS별 자세한 설치방법 및 hexo docs
    - `https://hexo.io/ko/docs/index.html`

## Hexo 테마

    - 다양한 사용자 설정 테마를 제공하고 있다.
    - `https://hexo.io/themes/`

    - 테마 선택한 뒤, 해당 저장소로 이동 (github repo)

    - 압축 헤제 시 `hexo-theme-icarus-master` 폴더가 있는데, `icarus` 로 이름 변경 한 뒤 `blog` 폴더의 `themes` 폴더 안에 넣어준다.
    - 사용할 블로그 테마를 결정할 때 폴더 이름을 사용하기 때문에 간편하게 설정해주는 것이 더 편리하다.
    - `hexo` 설정 파일에서 테마를 변경해야한다.
    - `blog` 폴더 루트 경로에 `_config.yml` 파일이 있는데, 이 파일이 `hexo` 기본 설정 파일이고, 여기서 전반적인 사이트 설정을 할 수 있다.
    - theme 키에 해당하는 값을 icarus로 수정한다.
