---
layout: post
title: "Spring security"
excerpt: "스프링 시큐리티"
author: 00pow
date: 2023-12-23 10:10:00 +0900
categories:
  - Blogging
  - Study
tags: [writing]
render_with_liquid: true
published: true
comments: true
---

## Spring Security

안녕하세요. 저는 **00pow**입니다.<br>
오늘은 스프링 시큐리티에 대해 정리해보겠습니다<br>


### 스프링 시큐리티

스프링 시큐리티는 인증(Authentication), 권한(Authorize) 부여 및 보호 기능을 제공하는 프레임워크다. <br>
개발을 하면서 보안 분야는 시간이 많이 소요되는 활동들 중 하나다. Spring Security를 사용함으로써 <br>
짜여진 내부 로직을 통해 인증, 권한 확인에 필요한 기능과 옵션들을 제공한다.

### 인증(Authentication), 인가(Authorization) 

보통 인증 절차를 거친 후에 인가 절차를 진행한다. <br>
`인증` : 해당 사용자가 본인이 맞는지를 확인하는 절차. <br>
`인가` : 인증된 사용자가 요청된 자원에 접근 가능한가를 결정하는 절차

### 인증 방식

1. credential 방식 : username, password를 이용하는 방식 <br>
2. 이중 인증(twofactor 인증) : 사용자가 입력한 개인 정보를 인증 후, 다른 인증 체계(예:물리적인 카드)를<br>
이용하여 두가지의 조합으로 인증하는 방식이다.<br>
3. 하드웨어 인증 : 자동차 키와 같은 방식 <br>

이중 Spring Security는 credential 기반의 인증을 취합니다.<br>
`principal` : 아이디(username) <br>
`credential` : 비밀번호(password) <br>
특정 자원에 대한 접근을 제어하기 위해서는 권한을 가지게 된다.<br>
특정 권한을 얻기 위해서는 유저는 인증 정보(Authentication)가 필요하고 관리자는 해당 정보를 참고해<br>
권한을 인가(Authorization)한다.<br>
보편적으로 username-password 패턴의 인증방식을 거치기 때문에 스프링 시큐리티는 principal-credential 패턴을 가지게 된다.<br>



### Spring Security의 특징

1. Filter를 기반으로 동작한다. <br>
- Spring MVC와 분리되어 관리하고 동작할 수 있다.<br>
2. Bean으로 설정할 수 있다.<br>
- Spring Security 3.2부터는 XML설정을 하지 않아도 된다.<br>
 


### Spring Security Architecture(구조)
![image](https://github.com/00pow/ddobagi/assets/143794137/633ff75f-a295-4b27-8a26-c980ad0c1ff2)
이 사진은 스프링 시큐리티의 아키텍처 사진이고 스프링 시큐리티의 흐름은 아래와 같다. 


1. Http Request 수신 <br>

-> 사용자가 로그인 정보와 함께 인증 요청을 한다. <br>

2. 유저 자격을 기반으로 인증토큰 생성  <br>

-> AuthenticationFilter가 요청을 가로채고, 가로챈 정보를 통해 UsernamePasswordAuthenticationToken의 인증용 객체를 생성한다. <br>

3. FIlter를 통해 AuthenticationToken을 AuthenticationManager로 위임 <br>

-> AuthenticationManager의 구현체인 ProviderManager에게 생성한 UsernamePasswordToken 객체를 전달한다. <br>

4. AuthenticationProvider의 목록으로 인증을 시도 <br>

-> AutenticationManger는 등록된 AuthenticationProvider들을 조회하며 인증을 요구한다. <br>

5. UserDetailsService의 요구 <br>

-> 실제 데이터베이스에서 사용자 인증정보를 가져오는 UserDetailsService에 사용자 정보를 넘겨준다. <br>

6. UserDetails를 이용해 User객체에 대한 정보 탐색 <br>

-> 넘겨받은 사용자 정보를 통해 데이터베이스에서 찾아낸 사용자 정보인 UserDetails 객체를 만든다. <br>

7. User 객체의 정보들을 UserDetails가 UserDetailsService(LoginService)로 전달 <br>

-> AuthenticaitonProvider들은 UserDetails를 넘겨받고 사용자 정보를 비교한다.<br>

8. 인증 객체 or AuthenticationException<br>

-> 인증이 완료가되면 권한 등의 사용자 정보를 담은 Authentication 객체를 반환한다.<br>

9. 인증 끝<br>

-> 다시 최초의 AuthenticationFilter에 Authentication 객체가 반환된다.<br>

10. SecurityContext에 인증 객체를 설정<br>

-> Authentication 객체를 Security Context에 저장한다.<br>

최종적으로는 SecurityContextHolder는 세션 영역에 있는 SecurityContext에 Authentication 객체를 저장한다. <br>
사용자 정보를 저장한다는 것은 스프링 시큐리티가 전통적인 세선-쿠키 기반의 인증 방식을 사용한다는 것을 의미한다.<br>


## 마치며
오늘은 Spring Security를 정리해보았습니다<br>
읽어주셔서 감사합니다. <br>
