---
title: UA와 GA4의 차이점
slug: what-is-the-difference-between-ua-and-ga4
---

UA(Universal Analytics)는 Google Analytics(이하 GA)의 기존 버전입니다. 한편 GA4는 2020년에 출시된 새로운 버전입니다.

## 계정 구조의 차이

UA와 GA4의 계정 구조 차이에 대해 살펴보겠습니다. 먼저 UA의 기본적인 계정 구조에 대한 부분을 알고 싶으시다면 이 핸드북의 GA 기본편을 보고 오셔도 좋습니다.

여기서 간단히만 설명하자면 UA는 계정(Account) 밑에 속성(Property)이 있고, 속성 밑에 뷰(View)가 있는 구조입니다. 여러분께서는 계정을 만든 다음, 데이터를 추적하고 싶은 웹사이트나 앱을 속성으로 만들 수 있습니다. 즉 속성 하나에 웹사이트나 앱 하나가 대응된다고 생각하면 됩니다. 그리고 하나의 계정에 여러 개의 속성이 있을 수 있습니다. 여러 개의 웹사이트나 앱을 트래킹하고 싶을 수 있으니까요.

그리고 하나의 속성에는 그 속성의 데이터를 보여주는 여러 개의 뷰(View)가 있을 수 있습니다. 뷰를 이해하기 쉽게 말하자면 `리포트`라고 할 수 있을 것 같습니다. 그 속성으로 들어오는 데이터에 [필터](https://support.google.com/analytics/topic/1032939)를 걸어서 보고 싶은 뷰(리포트)를 만들 수 있습니다. 예를 들어 `www.example.com` 이라는 웹사이트를 추적하기 위해 이에 대응되는 속성을 하나 만들고, 그 사이트에 들어오는 사람들 중 광고 클릭을 통해 유입된 사람만 보고 싶을 때는 필터를 걸어서 뷰(리포트)를 만들면 됩니다.

| ![image](https://user-images.githubusercontent.com/46309894/131212192-c486ee48-f2b0-411b-9180-728d7d6b8b5f.png) |
| :-------------------------------------------------------------------------------------------------------------: |
|                                                 UA의 계정 구조                                                  |

### UA 계정 구조의 단점

이제 UA 계정 구조에 대해 간단히 살펴봤으니 어떤 단점이 있는지 보겠습니다.

1. **뷰 필터는 소급 적용되지 않는다**

   여러분이 보고 싶은 특정한 데이터가 있어서 어떤 필터를 걸어 뷰를 생성했습니다. 이 날짜가 1월 1일이라고 가정해봅시다. 그 때부터 이 뷰는 필터에 따라서 처리된 데이터를 보여주기 시작합니다. 그런데 2월 1일에 여러분은 뷰 데이터가 이상하다는 것을 눈치챘습니다. 애초에 필터를 만들 때 실수로 잘못 만들어버린 것입니다. 그래서 이 때 필터를 제대로 설정해서 다시 설정합니다. 그렇게 되면 2월 1일부터는 제대로 필터링된 데이터를 볼 수 있지만 이 전에 잘못된 필터를 설정한 1월 1일부터 1월 31일까지의 데이터는 다시 새로운 필터를 적용해서 볼 수가 없습니다. 즉 그 기간의 데이터는 이미 잘못된 데이터이고 새로운 필터를 설정했다고 해서 이전 기간에 소급해서 적용할 수 없다는 것입니다. 그래서 속성에는 모든 데이터를 모아두는 뷰(Unfiltered View)를 항상 유지하라고 합니다. Original data가 모아져있는 뷰가 없다면, 우리는 앞선 예시에서처럼 필터를 잘못 걸었을 때 그 기간에 대한 데이터를 영영 잃어버리는 셈이니까요.

   필터의 단점에 대해 더 알아보고 싶다면 [여기](https://support.google.com/analytics/answer/1033162?hl=en#zippy=%2Cin-this-article)에서 `Limitations of filters`를 참고해보세요.

2. **웹사이트와 앱은 각각의 속성으로 만들어야 한다**

   UA에서는 웹과 앱을 하나의 속성에서 관리할 수 없습니다. 동일한 서비스를 웹과 앱으로 동시에 서비스하고 있다고 해도, 각각의 속성으로 만들어 각각의 뷰를 생성해야 하므로 데이터를 모아서 보기에 불편한 점이 있습니다.

   ![image](https://user-images.githubusercontent.com/46309894/131214423-0c523610-fd0d-416e-9058-e9c1337648d7.png)

### 개선된 GA4의 계정 구조

GA4는 위에서 서술한 UA의 단점들을 어떻게 보완했는지 살펴보겠습니다.

| ![image](https://user-images.githubusercontent.com/46309894/131215475-e024a396-1b60-4227-b7d9-c36b7d321660.png) |
| :-------------------------------------------------------------------------------------------------------------: |
|                                                 GA4의 계정 구조                                                 |

1. **GA4에는 뷰가 없다**

   UA와 달리 GA4는 따로 뷰를 생성하지 않습니다. 그 대신 필터링된 데이터를 볼 수 있는 다른 방법을 제공합니다.

   첫 번째는 데이터 필터입니다. GA4의 왼쪽 사이드바 맨 밑에 있는 관리자(Admin) - 속성(Property) - 데이터 설정(Data settings) - 데이터 필터(Data filters)로 들어가면 트래픽에 대한 필터를 걸 수 있습니다. 예를 들어 특정 서브도메인으로부터 온 트래픽만 필터링해서 보고 싶다면 이 기능을 사용하면 됩니다.

   두 번째는 탐색(Explorations)입니다. 왼쪽 사이드바에 탐색(Explore)을 버튼을 누르면 굉장히 다양한 보고서를 만들 수 있습니다. 기본적으로 [Dimenstion과 Metric](https://support.google.com/analytics/answer/1033861?hl=en#zippy=%2Cin-this-article)을 설정하여 보고서를 만들되 원하는 Dimension과 Metric 모두 필터링할 수 있습니다. 조금 더 자세한 내용은 [여기](https://support.google.com/analytics/answer/7579450?hl=en#zippy=%2Cin-this-article)에서 봐주세요.

2. **GA4는 웹과 앱을 하나의 속성에서 관리할 수 있다**

   GA4에는 `데이터 스트림`이라는 개념이 새로 등장합니다. 데이터 스트림은 `데이터 출처`로 이해하면 쉬울 것 같습니다. 하나의 속성에 최대 3개의 데이터 출처로부터 데이터를 받을 수 있습니다. 이 3개는 각각 iOS, Android, 웹입니다.

   UA에서는 동일한 서비스라도 웹과 앱을 동일한 속성에서 데이터를 모아볼 수 없었는데 GA4에서는 통합해서 볼 수 있게 된 것입니다.

## 그 외의 차이점

계정 구조 외에도 몇가지 개선된 점이 있습니다.

- GA4에서는 페이지뷰, 스크롤, 링크 클릭, 파일 다운로드와 같은 중요한 행동들은 따로 설정하지 않아도 자동으로 추적합니다.

- 퍼널 분석, 경로 분석과 같은 새로운 보고 옵션이 추가됐습니다.

- UA 데이터 모델에서는 이벤트의 구조가 `Category`, `Action`, `Label`이라는 3가지 구조로 나누어져 있으며 이에 맞추어 이벤트 데이터를 보내야 했습니다.

  그리고 사용자의 행동을 `Hit`이라고 하는데, `page tracking hit`, `event tracking hit`, `ecommerce tracking hit` 등으로 분류돼 있고 데이터를 보낼 때 무슨 hit에 속하는지를 나타내는 hit type을 함께 전송해야 했습니다.

  반면 GA4에서는 이런 hit type과 같은 구분 없이 모든 정보를 이벤트 하나로 처리하며, UA의 `Category`, `Action`, `Label`과 달리 정해진 데이터 구조의 제한이 없이 원하는 데이터의 전송이 가능합니다. 이 차이점에 대해 더 자세히 알고 싶다면 [여기](https://support.google.com/analytics/answer/9964640?hl=en&ref_topic=10737980#zippy=%2Cin-this-article)를 참고해보세요.

## 마무리

지금까지 새로운 UA와 GA4의 차이점에 대해 알아봤습니다. 전반적으로 GA4는 UA보다 유연하게 데이터를 수집하고 통합적으로 볼 수 있다는 장점이 있는 것 같습니다. 그렇다면 지금 UA를 쓰고 있다면 GA4로 옮겨야 할까요? 만약 웹과 앱의 데이터를 하나의 속성에서 보고 싶다면 옮기는 게 좋겠고, 더 많은 보고서와 향상된 측정 기능을 사용하고 싶으면 고려해볼 수 있을 것 같습니다.

마지막으로 UA에서 GA4로 옮기고 싶다면 [여기](https://support.google.com/analytics/answer/10312255?hl=en)를 참고해보세요. UA 애널리틱스 페이지의 왼쪽 사이드바 - 관리자 - 속성에서 맨 위에 있는 GA4 어시스턴트 설정을 누르면 시작할 수 있답니다.

## 참고 자료

- [https://www.inflearn.com/course/구글-애널리틱스4](https://www.inflearn.com/course/%EA%B5%AC%EA%B8%80-%EC%95%A0%EB%84%90%EB%A6%AC%ED%8B%B1%EC%8A%A44/)
