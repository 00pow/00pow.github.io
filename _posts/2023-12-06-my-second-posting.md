---
layout: post
title: "Kakao Developers"
excerpt: "카카오 간편 로그인"
author: 00pow
date: 2023-12-06 14:10:00 +0900
categories: [Blogging, Tutorial]
tags: [writing]
render_with_liquid: true
published: true
comments: true
---

## 카카오 로그인 설정 필수사항에 대해 간단히 포스팅 해보겠습니다

안녕하세요. 저는 **00pow**입니다.<br>
2차 프로젝트에 카카오 간편 로그인 기능을 추가 하기 전<br>
카카오 로그인을 사용하기 위해 반드시 설정해야 하는 필수 설정을 정리하도록 하겠습니다.<br>
kakao developers 사이트에 접속합니다. <br>

### 첫번째 플랫폼 등록

카카오 API는 카카오디벨로퍼스에 플랫폼 정보가 등록된 서비스에서만 사용 가능합니다. <br>
[내 애플리케이션] > [플랫폼]에서 서비스의 각 플랫폼 정보를 등록할 수 있습니다.<br>
![image](https://github.com/00pow/HappyHasigae/assets/143794137/8117f456-2c3b-45f8-98c3-115a0b3fb9eb)


### 두번째 카카오 로그인 활성화

[내 애플리케이션] > [카카오 로그인]에서 [활성화 설정]의 [상태]를 [ON]으로 설정해야 합니다. <br>
[활성화 설정]의 [상태]가 [OFF]인 경우, 카카오 로그인 요청 시 KOE004 에러가 발생합니다.<br>
![image](https://github.com/00pow/HappyHasigae/assets/143794137/1457b47d-34ad-41f9-a0b0-e1226d4711ba)


### 세번째 Redirect URI 등록

REST API 또는 Kakao SDK for JavaScript로 카카오 로그인을 사용한다면 Redirect URI를 반드시 등록해야 합니다.<br>
카카오 로그인 활성화 후 맨 아래에 있는 Redirect URI 를 설정해주세요<br>
![image](https://github.com/00pow/HappyHasigae/assets/143794137/83aaab72-7dfe-431b-b55f-4f716e1903bd)


### 네번째 동의항목 동의

개인정보 아래의 닉네임, 프로필 사진, 카카오 계정을 <br>
동의해주세요 <br>

## 마치며
오늘은 카카오 간편로그인 전 필수 사항에 대해 알아보았고 <br>
다음번에는 만들면서 발생한 오류나 만드는 과정을 정리해보겠습니다<br>
읽어주셔서 감사합니다!<br>