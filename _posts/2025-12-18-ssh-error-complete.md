---
layout: post
title: "SSH-error-complete"
excerpt: "SSH 서버 접속(1)"
author: 00pow
date: 2025-12-18 11:10:00 +0900
categories:
  - Blogging
  - Study
tags: [writing]
render_with_liquid: true
published: true
comments: true
---

## SSH 서버 설치(CMD)

안녕하세요. 저는 **00pow**입니다.<br>
오늘은 SSH를 통해 유선 연결 없이 파일을 주고 받는 방법을 알아보겠습니다.<br>
중간에 에러 상황이 있긴 했지만 해결하는 과정까지 정리해보겠습니다.<br>


### SSH 구조
`내 노트북 -- (SSH 클라이언트) --> 상대 컴퓨터`<br>
`접속하는 쪽 = SSH Client`<br>
`접속당하는 쪽 = SSH Server (sshd)`<br>


### 1.OpenSSH 서버 설치 여부 확인 

관리자 권한 CMD에서 실행<br>
sc query sshd 입력<br>
결과해석 <br>
STATE : RUNNING / STOPPED -> 이미 설치됨 <br>
지정된 서비스가 없습니다 -> 아직 설치 안 됨 <br>

### 2.(미설치 시) OpenSSH 서버 설치

관리자 권한 CMD에서 실행

```powershell
powershell -Command "Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0"
```

설치 후 재부팅 필요
설치 완료 후 재확인:
sc query sshd



### 3.SSH 서버 서비스 실행

관리자 권한 CMD에서 실행 <br>
net start sshd<br>
또는<br>
sc start sshd <br>
실행된 상태-> OpenSSH SSH Server 서비스가 시작되었습니다 <br>
 


### 4. 부팅 시 자동 실행 설정

sc config sshd start= auto <br>

start= 뒤에 공백 필수 <br>



### 5. 방화벽에서 22번 포트 허용 (중요)
netsh advfirewall firewall add rule name="OpenSSH Server (22)" ^ <br>
dir=in action=allow protocol=TCP localport=22 <br>
포트 22 상태 확인 <br>
TCP 0.0.0.0:22 LISTENING <br>
TCP [::]:22 LISTENING <br>

0.0.0.0:22 -> 모든 IPv4 IP에서 접속 허용 <br>
[::]:22 -> IPv6에서도 접속 허용 <br>
LISTENING -> 누군가 접속하면 바로 받음 <br>

### 6. 실행 상태 한번에 확인

sc query sshd <br>
정상 상태:
STATE : 4 RUNNING <br>

### 7. 이제 다른 PC에서 접속 가능

ssh 사용자명@상대PC_IP <br>
예:
ssh admin@192.168.0.50 <br>

### (선택) 포트 열려 있는지 확인

상대PC에서:
netstat -ano | findstr :22 <br>
결과가 뜨면 문 열림 상태 <br>

### 8. 다른 노트북에서 파일 가져오기 

scp user@해당PC_IP:C:\Users\user\Desktop\test.jpg C:\temp\ <br>

scp -r user@해당PC_IP:C:\Data\Images C:\temp\ <br>


### 중간 점검 key point

사용자 계정 <br>
이 PC에 실제 존재하는 Windows 계정이어야 함 <br>
비밀번호 필수 <br>

빠른 테스트<br>
자료를 보낼 PC에서 자기 자신에게 접속 테스트:
ssh localhost <br>
yes 입력 후 <br>
성공하면: <br>
user@PCNAME C:\Users\user> <br>



