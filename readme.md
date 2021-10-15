


# Project name or Logo

![Logo](https://github.com/osamhack2021/AI_CLOUD_WEB_BATMAN_BATNAM/blob/master/logo.png?raw=true)



## 프로젝트 소개
### 아이템 개요
 - BAT(BirdAlertTeam)이란, 우리나라 말로 조류퇴치반이라 하며 항공기가 이착륙시 조류와 충돌해 엔진결함 및 추락사를 방지하기 위해 조류퇴치를 전담하는 반이다. 대한민국 공군 BAT의 비효율적 조류퇴치에 문제점을 발견하였고, AI기반 웹 솔루션을 통해 공군의 공중전투 지원시 발생하는 버드스트라이크를 현저히 줄임과 동시에 낭비되는 공포탄 및 전력을 효율적으로 관리하고자 한다. BAT의 조류퇴치 방식중 조류퇴치의 한계에 도달하는 부분이나 자원,인력 소모에 있어 비효율적인 문제에 대하여 분석하였다. 그리고 솔루션의 핵심을 OpenCV의 Tensorflow를 기반으로 활주로에 접근하는 조류의 식별을 통해 상황에 적절한 조류퇴치 솔루션을 제공하는 목표를 세웠다. 현재 BAT의 조류퇴치 방식의 한계 및 문제점은 아래와 같다. 1. 조류가 근처에 있지 않음에도 공포탄을 주기적으로 발사하여 한 활주로에 연간 20만발 이상이 소모 되고 있다. 2. 조류가 근처에 있지 않음에도 조류퇴치 음향기를 사용하여 주변의 소음 문제 및 전력 소모량이 상당하다. 3. 엽총을 이용하여 조류를 퇴치 중 보호종 사살의 문제가 발생한다. 4. 공포탄과 음향퇴치기 미작동 시간에 접근하는 조류를 퇴치하는 방법이 없다. 그래서 우리는 위 4가지 문제점을 바탕으로 이번 프로젝트에서는 아래의 3가지 솔루션을 제공하고자 한다. 1. 조류의 접근시 조류 식별 후, 공포탄 및 음향퇴치기를 작동시켜 조류의 접근을 완전 차단한다. 2. 다수의 조류 접근시 BAT을 호출하는 기능을 제공하고 사살 가능 여부를 알려주어 효율적으로 인력을 관리한다. 3. 웹 애플리케이션에서 공포탄 및 음향퇴치기의 자원 소모 내역을 집계 및 통계하고 효율적으로 자원을 관리할 수 있게 한다. 위 솔루션들을 바탕으로 공군의 공중전투 임무 지원시 발생하는 버드스트라이크 발생율을 0%에 가깝게 하고, 사용되는 전력,인력,자원 소모량을 100%에 가깝게 아끼고자 한다.
### 개발 개획 및 목표
 - 이번 프로젝트에서 제공하고자 하는 솔루션 비전은 다음과 같다. 1. AI,Cloud 의 기술을 융합하여 WEB 솔루션으로 제공한다. 2. 실시간 활주로근방 영공의 모습을 제공하고, 조류 접근시 해당 섹터 부근에 조류가 접근중임을 알린다. 3. 당일 조류출몰 횟수, 공포탄 소모량, 전력소모량 등 다양한 지표를 통계하여 제공한다. 4. 웹 어플리케이션은 AI가 조류를 식별하여 선택된 적절한 BAT 솔루션을 데이터로 받아 공포탄 및 음향퇴치기의 자원 소모 내역을 집계하여 효율적으로 자원 및 인력을 관리할 수 있게 한다. 선택된 BAT 솔루션에서 사용된 자원 데이터를 서버에 저장해 AI가 이를 데이터로 사용할 수 있게 한다. 5. 인공지능은 영상처리와 이미지 분석, 딥러닝을 통해 활주로에 출현한 조류를 식별하는 역할을 한다. 그 후 상황에 맞는 솔루션을 전달하여 최적의 결과를 얻도록 조치하게 한다. 이 과정을 통해 AI는 인력과 자원의 낭비, 더 나아가 보호종으로 분류되어있는 조류들을 무분별한 살상으로부터 보호함으로써 환경 보호에도 이바지함을 목표로 둔다. 6. 실시간 영상 송출과 인공지능 솔루션이 융합될 경우, 하드웨어에 많은 부담을 줄 수 있기 때문에, Docker의 컨테이너 기술을 이용하여 실시간 영상 송출과 인공지능 분야의 융합을 이룰 수 있도록 구축한다. 뿐만 아니라, 웹 애플리케이션 에서도 다양한 기능을 제공하면서 Docker를 이용하여 MicroService를 제공하고자 한다. 이번 프로젝트에서는 클라우드기술을 중점적으로 다루어, 실시간 영상처리 뿐만 아니라 효율적이고 체계적인 인프라를 구축하여 서비스의 질을 향상한다. Docker를 이용하여 인프라를 구축할 계획이고 팀원의 개발환경이 다 다르기 때문에 개발환경 통합및 데이터베이스 연동에 힘을 실을 것이다.
### 기대 효과 및 전망
 - B.A.T.M.A.N의 기대효과는 아래와 같다. 1. 공포탄의 연간 평균 소모량을 50%이상 절약 할 수 있다. 2. 조류음향퇴치기의 작동시간을 50%이상 절약하여 소모하는 전력량을 절약할 수 있다. 3. 엽총을 이용하여 조류 퇴치시 발생하는 보호종 사살의 문제를 없앨 수 있다. 4. 웹 애플리케이션의 다양한 서비스로 효율적인 인력 관리와 자원관리를 통해 국비절감에 도움이 된다. 그리고 이 프로젝트는 공군에 국한 되지 않고 민간공항에 적극 활용될 수 있는 사업성 요소를 잠재 하고 있다. 현재 COVID19로 인하여 침체된 항공운송 및 관광분야가 조만간 다시 부활 한다는 점을 고려해보면 이 프로젝트의 수요가 늘어날수 있음을 짐작할 수 있다. 뿐만 아니라, 현재 국군 병 입대자 수치는 인구 감소로 인하여 점차 낮아지고 있는 모습을 볼 수 있는데 조금이나마 인력소모에 부담을 덜 수 있는 프로젝트라고 예측하고 있다.

## 기능 설명
 - 설명 기입

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상

## 기술 스택 (Technique Used) 
### Server(back-end)
 -  nodejs, php, java 등 서버 언어 버전 
 - express, laravel, sptring boot 등 사용한 프레임워크 
 - DB 등 사용한 다른 프로그램 
 
### Front-end
 -  react.js, vue.js 등 사용한 front-end 프레임워크 
 -  UI framework
 - 기타 사용한 라이브러리

## 설치 안내 (Installation Process)
```bash
$ git clone git주소
$ yarn or npm install
$ yarn start or npm run start
```

## 프로젝트 사용법 (Getting Started)
**마크다운 문법을 이용하여 자유롭게 기재**

잘 모를 경우
구글 검색 - 마크다운 문법
[https://post.naver.com/viewer/postView.nhn?volumeNo=24627214&memberNo=42458017](https://post.naver.com/viewer/postView.nhn?volumeNo=24627214&memberNo=42458017)

 편한 마크다운 에디터를 찾아서 사용
 샘플 에디터 [https://stackedit.io/app#](https://stackedit.io/app#)
 
## 팀 정보 (Team Information)
- Kwon Sun Jae (ksun4131@gmail.com), Github Id: KwonSunJae


## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)

This project is licensed under the terms of the MIT license.

※ [라이선스 비교표(클릭)](https://olis.or.kr/license/compareGuide.do)

※ [Github 내 라이선스 키워드(클릭)](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository)

※ [\[참조\] Github license의 종류와 나에게 맞는 라이선스 선택하기(클릭)](https://flyingsquirrel.medium.com/github-license%EC%9D%98-%EC%A2%85%EB%A5%98%EC%99%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0-ae29925e8ff4)
