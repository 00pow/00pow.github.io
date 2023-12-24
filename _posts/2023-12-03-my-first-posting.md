---
layout: post
title: "Error in creating GitHub blog"
excerpt: "깃허브 연동 블로그 생성 중 발생했던 오류"
author: 00pow
date: 2023-12-03 14:10:00 +0900
categories: [Blogging, Tutorial]
tags: [writing]
render_with_liquid: false
published: true
---

## 깃허브 블로그 생성 과정에서 발생했던 크고 작은 오류들에 대해 포스팅 해보겠습니다

안녕하세요. 저는 **00pow**입니다.<br>
깃허브 연동 기술 블로그를 생성하면서 발생한 에러들을 정리해보겠습니다.<br>
window8 환경에서 작업하였고 jekyll theme로는 chirpy를 이용하였습니다.<br>


### 첫번째 에러입니다

ruby로 로컬서버 미리보기 했을 때는 사이트가 잘 뜨는데,<br>
깃허브 주소로 연결되었을 때는 아래와 같은 사진이 떴습니다.<br>
![error](https://github.com/00pow/ddobagi/assets/143794137/198bfcc4-d831-40fd-a305-16eeb836e165)

이 에러에 대한 해결방안은 저의 경우 이렇게 해결하였습니다.<br>

`bundle lock --add-platform x86_64-linux`

- 참고 사이트 : [링크](https://stackoverflow.com/questions/72331753/ruby-and-rails-github-action-exit-code-16){:target="_blank"}

Github Actions는 `x86_64-linux` 우분투용 플랫폼을 사용합니다. <br>
그러나 `Gemfile.lock` 종료 코드 16으로 이어지는 플랫폼이 없으므로 <br>
명령을 실행하면 `x86_64-linux` 다음에 플랫폼이 추가됩니다.<br>


### 두번째 에러입니다

깃허브 블로그 글쓰기에서 로컬에 있는 이미지를 첨부할 때 <br>

캡쳐나 로컬에 있는 이미지라 이미지 주소가 없을 때 이미지를 올리는 방법은<br>

제 깃허브에 들어갑니다.<br>
아무 `repository`에 들어가서 <br>
`Issues`- `New issue` 클릭<br>
`Add a description`에 사진을 붙여 넣어주세요<br>
그러면 `![image](./img/이미지이름.png)` 형태의 <br>
주소가 복사되어 사진을 올릴 수 있습니다. <br>
사진을 저장하지 않고도 캡쳐 화면으로도 주소를 얻을 수 있어 좋은 방법인 것 같습니다.<br>

- 참고 사이트 : [링크](https://velog.io/@uzchu/Github-%EB%B8%94%EB%A1%9C%EA%B7%B8-image-%EC%82%BD%EC%9E%85%ED%95%98%EA%B8%B0){:target="_blank"}


### 세번째 에러입니다

ruby prompt 실행 시 `bundle exec jekyll serve` 했을 때<br>
`ERROR '/assets/js/dist/post.min.js'not found.` 에러 발생<br>

해결방안은 npm을 통해 node.js 모듈을 설치하는 것입니다.<br>
`npm install && npm run build`<br>

node.js 모듈을 설치하지 않으면 assets/js/dist/*.min.js NotFound 에러 발생과 함께<br>
블로그 기능이 정상적으로 동작하지 않으므로 node.js설치가 중요하다는 걸 알았습니다. <br>

- 참고 사이트 : [링크](https://jjikin.com/posts/Jekyll-Chirpy-%ED%85%8C%EB%A7%88%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-Github-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0(2023-6%EC%9B%94-%EA%B8%B0%EC%A4%80)/#%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95-%EA%B0%84-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0){:target="_blank"}

### 마무리

여러가지 크고 작은 에러를 만나며 블로그 생성에 어려움을 느꼈지만<br>
계속해서 해결방안을 찾아내고 마침내 적용되었을 때의 <br>
그 뿌듯한 마음이 정말 좋았습니다. <br>
앞으로 프로젝트를 하면서 트러블 슈팅과정이나, 느낀점들을<br>
블로그에 하루하루 기록해나가며 제 것으로 만들어 낼 것입니다.<br>
읽어주셔서 감사합니다!<br>