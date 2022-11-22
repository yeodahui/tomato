# 생산성 관리 웹앱 TOMATO🍅

집중하고 싶을 때, TOMATO로 할일을 관리해 보세요.

## 개요

배포 URL🔗 : 
[https://yeodahui.github.io/tomato/](https://yeodahui.github.io/tomato/)

TOMATO는 직관적인 UI의 태스크 관리 웹앱입니다.

평소 웹이나 앱을 활용해 하루 할 일을 정리해두고 수시로 확인하는데, 사용하지 않는 기능이 시야에 밟혀 내가 원하는 정보를 빠르게 읽어내기 어렵다는 아쉬움이 있었습니다.

TOMATO에서는 현재 시간, 할일과 완료한 일 목록 등 가장 필요한 요소만 보이게 해 복잡한 생산성 앱에서 느끼던 아쉬움을 개선했습니다.

## 기술 스택

언어: HTML, CSS, **JavaScript**

라이브러리: **React(v.18)**, react-icons, react-full-screen

Version 관리: GitHub

문서화: Notion

## 주요 기능 소개

### 1. 할 일 추가 / 완료 / 제거

페이지에 접속하면 자동으로 할 일 입력창에 `Focus`됩니다.

![스크린샷 2022-11-23 오전 6.54.12.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e463aeb8-8c08-4b84-9093-8e24e5f39120/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-23_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_6.54.12.png)

- 할 일을 입력하고 Enter 키를 누르면 할 일 목록에 **등록**할 수 있습니다.
- 등록한 할일은, 좌측의 원형 버튼을 눌러 **완료** 상태로 변경할 수 있습니다.
- 잘못 입력한 할일은 우측의 휴지통 아이콘을 클릭해 **삭제**할 수 있습니다.

### 2. 현재 시간

오늘이 며칠인지, 몇 시인지 실시간으로 보여줍니다.

![스크린샷 2022-11-23 오전 6.38.39.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8785d4c9-231f-4383-9759-fcf543da71e5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-23_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_6.38.39.png)

### 전체화면으로 보기

주로 듀얼모니터를 사용하는 저는, 해야 하는 일들을 “한 쪽 화면에 꽉차게 띄워놓고 수시로 확인”하는 편입니다. 덕분에 FullScreen 기능을 굉장히 잘 활용하고 있는데요.

![Nov-23-2022 06-26-50.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de1b7198-5cab-4b8b-8e15-fc80b992572f/Nov-23-2022_06-26-50.gif)

F11을 누르지 않고도 마우스 클릭으로 전체화면을 만들어주는 기능을 추가했습니다. 화면 우측 하단의 Floating Button을 클릭하면 화면에 꽉차게 사이트를 띄울 수 있습니다.

## 문제해결 경험 및 느낀 점

- **전역 상태관리의 어려움**
    - 이번 프로젝트에서는 React의 전역 상태 관리에 대해 많이 배웠습니다. 재사용이 가능할 법한 UI 컴포넌트들을 최대한 분리하였더니 부모요소와 자식요소 간에 props 이동의 depth가 깊어졌고, 다양한 컴포넌트들이 변경하고/구독하는 정보를 서로 교환하는 것을 Clean한 코드를 유지하면서 작성하기 어려웠습니다.
    - 때문에 Context API를 사용해 상태를 전역적으로 사용할 수 있도록 만들어 코드의 가독성을 높였습니다. 프로젝트의 규모가 작기 때문에 Recoil이나 Redux등의 상태관리 툴을 사용하기에 부적합하다고 생각해 React 내부 라이브러리를 최대한 활용하였습니다.
- **JavaScript와 React의 같은 기능, 다른 구현 방법**
    - JavaScript에서는, DOM Element가 제공하는 함수를 통해 full-screen을 만들 수 있지만 React 라이브러리를 이용해 UI를 구성했을 때는 정상적으로 DOM Element에 접근할 수 없는 현상이 발생하였습니다.
    - React는 UI가 언제 마운트/언마운트 될지 예측하기 어렵기에 다른 Element 접근 방법을 사용하고 있는데, document DOM에 full screen 함수가 사용되지 않은 것도 그 때문으로 추측됩니다.
    - 리서치를 통해 다른 개발자가 오픈소스로 제작한 react-full-screen이라는 라이브러리를 발견해 적용하였습니다.
