---
layout: post
title: "Spring security setting"
excerpt: "스프링 시큐리티"
author: 00pow
date: 2023-12-24 10:10:00 +0900
categories: [Blogging, Tutorial]
tags: [writing]
render_with_liquid: true
published: true
comments: true
---

## Spring Security

안녕하세요. 저는 **00pow**입니다.<br>
오늘은 스프링 시큐리티 실습과정에 대해 정리해보겠습니다<br>


### 스프링 시큐리티 필요 라이브러리 설치
`spring-security-web`<br>
`spring-security-config`<br>
`spring-security-core`<br>
`spring-security-taglibs`<br>


### 스프링 시큐리티 필터 설정

web.xml 파일에 스프링 시큐리티 설정을 해준다요. <br>
security-context.xml 파일에도 인증 매니저와 같은 최소한의 코드를 입력한다.<br>
Security Controller 자바 클래스를 만들어주고, 메서드 3개 만들어서 각각의 메서드 맵핑해준다.<br>
톰캣 서버 모듈에 path를 / 로 바꿔준다. <br>
뷰 페이지를 만든다. <br>

### 권한 통제 방식

security-context.xml 파일에 각 주소에 따라 접근할 수 있는 권한을 분리해준다. <br>
인증 매니저에 유저의 네임, 패스워드, 권한을 입력한다-> 추후 db연결하면 일일이 적을 필요x<br>
권한이 없는 페이지에 들어가면 403에러가 뜬다.<br>

### 접근 권한 없는 페이지 접근 시 처리하는 동작

CustomAccessDeniedHandler 클래스에서 접근 권한 없는 페이지 접근 시 <br>
처리하는 동작으로 세션정보 수정, 쿠키값 변경 등을 할 수 있게 해주자.<br>
CustomAccessDeniedHandler 클래스를 객체로 만들어서 security-context에 넣어준다.<br>
security-context에 bean(객체)를 만든다. <br>
 


### 토큰

서버에는 브라우저에 데이터를 전송할 때 csrf 토큰을 같이 전송한다. <br>

쉽게 말하면 인증번호, 초대장 같은거다 <br>



## 마치며
오늘은 Spring Security를 정리해보았습니다<br>
읽어주셔서 감사합니다. <br>
