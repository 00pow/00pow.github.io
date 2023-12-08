---
layout: post
title: "Tomcat Error"
excerpt: "톰캣 에러"
author: 00pow
date: 2023-12-08 14:10:00 +0900
categories: [Blogging, Tutorial]
tags: [writing]
render_with_liquid: false
published: true
---

## Tomcat 에러 Several ports required by Tomcat v9.0 Server at localhost are already in use.

안녕하세요. 저는 **00pow**입니다.<br>
오늘은 스프링프레임워크 사용 시 발생하는 알람 창에서<br>
Tomcat 에러 Several ports (8005, 8080, 8009) required by Tomcat v9.0 Server at localhost are already in use.<br>
라는 문구가 떴을 때의 해결방안을 포스팅해보겠습니다. <br>

### 명령 프롬프트 실행

찾기에서 cmd를 검색해주고 <br>
netstat -p tcp -ano 를 입력합니다.<br>
![image](https://github.com/00pow/HappyHasigae/assets/143794137/c3a15e6a-358f-40a8-8333-2b6e3cdf632c)


### 톰캣이 사용하는 포트

Tomcat이 사용하는 기본 포트는 0.0.0.0:8088 입니다. <br>
포트를 사용중인 pid는 22960입니다. <br>
![image](https://github.com/00pow/HappyHasigae/assets/143794137/d7ca5695-e889-4f87-85c2-ea4610e80b62)


### 해당 pid 삭제

cmd에서 taskkill /f /pid 22960 를 입력해줍니다. <br>
pid 프로세스가 종료되었다고 뜨면 다시 포트들을 확인해봅니다. <br>
![image](https://github.com/00pow/HappyHasigae/assets/143794137/be58a14b-f0a3-4a38-af99-bac40191e5c5)


### 마지막 포트확인

더 이상 8088 포트를 사용하는 프로세스가 없는 것을 확인할 수 있습니다 <br>
이제 Tomcat에서 8088 포트를 사용할 수 있게 되어 에러가 발생하지 않습니다. <br>

## 마치며
오늘은 Tomcat 에러에 대해 알아보았습니다 <br>
읽어주셔서 감사합니다!<br>