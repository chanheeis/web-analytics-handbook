# 웹에서 어떤 데이터를 추적해야할까요? - 블로그

보통 블로그의 데이터를 추적한다고 할 때 제일 먼저 떠오르는 것은 글의 조회수일 것 입니다. 조회수란 것이 가장 직관적이면서도 기본이 되는 지표이기 때문입니다. 하지만 해당 데이터만으로만 블로그를 성공으로 이끄는 전략을 세우기엔 무리가 있습니다. 만약 내 글의 유입경로를 알 수 있다면? 사람들이 내 글에 들어와서 스크롤을 내려서 봤는지 알 수 있다면? 지피지기면 백전백승! 내 블로그의 데이터에 대해서 잘 알수록 블로그를 성공으로 이끌 수 있겠죠. Google Analytics 4를 활용해 블로그 데이터를 분석할 수 있는 세가지 방법에 대해서 소개해보고자 합니다.

<br />

## 조회 수

구글 애널리틱스에서 [page_view](https://support.google.com/analytics/answer/9322688?hl=ko) 이벤트는 앞서 말한 조회수에 해당하는 개념입니다. 이 이벤트는 사용자가 웹사이트에서 페이지를 조회할 때마다 트리거됩니다. *수명 주기 > 참여도 > 페이지 및 화면 > 이벤트 수 > page_view 선택*  하면 확인해볼 수 있습니다.

![1](https://user-images.githubusercontent.com/60052127/130340061-d8aee595-b375-424b-8e2a-cb87f169759b.png)

Column 제목에 마우스를 hover하면 해당 측정기준에 대한 설명을 볼 수 있고 클릭을 하게 되면 해당 제목으로 정렬된 데이터를 볼 수 있습니다.

블로그의 글이 얼마나 많은 조회수를 기록했는가는 중요하지 않지만, 아래와 같은 상황에선 의미를 가지기에 다른 측정 항목과 조합했을 때 시너지가 날 수 있는 지표입니다.

- 사람들이 하나의 글을 조회한 후 다른 글의 조회로 이어진 경우
- 사람들이 글을 조회한 후 블로그를 구독이나 팔로우한 경우
- 어떤 주제로 작성했을 때 블로그의 traffic이 늘었는지, 줄었는지

<br />


## 참여율

`engagment rate`, 참여율이란 `참여 세션 수 / 세션 수`로 계산되는 사용자 참여 세션 수의 비율입니다. 참여 세션 수란 10초 넘게 지속되었거나, 전환 이벤트가 1회 이상 발생했거나, 페이지 조회수가 2회 이상인 세션 수입니다. GA4 에선 이전에 사용하던 이탈률, 종료율 대신 참여율이라는 새로운 측정 기준이 생겼습니다. '사용자가 페이지에서 잘 나가는가' 대신 '사용자가 잘 참여하는가' 로 지표가 바뀌었다고 볼 수 있는데 결국 의미하는 것은 동일합니다. 참여율은 *수명주기 > 획득 > 사용자 획득/트래픽* 획득 에서 확인 가능합니다.

![2](https://user-images.githubusercontent.com/60052127/130340056-5b94dc91-908d-4906-98b8-0566ce84729a.png)

참여율이 낮다면 아래와 같은 해석이 가능합니다. 이런 점들을 보완해서 다음 글을 작성하는데 참고한다면 성공적인 블로그를 작성하는데 도움이 될 것입니다.

- 서론이 매력적이지 않았다.
- 콘텐츠의 질이 좋지 않다.
- 블로그에 집중력을 저해하는 요소들이 많다.
- 사이트 로딩 속도가 느리다.

<br />


## 유입 경로

어디서 내 글이 공유되었을까요? *수명 주기 > 획득 > 트래픽 획득* 에서 확인 가능합니다.

![3](https://user-images.githubusercontent.com/60052127/130340058-72224715-57fb-47eb-a57f-a7df62ff327f.png)

필자의 개인적인 경험으로는 유입경로 확인을 통해 내 글이 유용한 정보였는지 확인할 수 있었습니다. 예를 들면 kubernetes를 활용해 특정 과제를 해결하는 튜토리얼을 작성했던 적이 있습니다. 나중에 유입 경로를 확인해보니 kubernetes 커뮤니티, 트위터 등에 해당 글이 공유되었다는 것을 확인할 수 있었고 작성한 글이 다른 사람들에게 도움이 되었다는 것을 알 수 있었습니다.

만약 특정 그룹을 타겟팅해 작성한 글이라면 유입경로 확인을 통해 타겟팅이 성공적이었는지 확인할 수 있겠죠. 의외로 타겟팅한 그룹이 아닌 다른 그룹이 해당 글에 관심을 보였다면 또 다른 인사이트를 도출해낼 수 있을 것입니다.

<br/>

이렇게 블로그 데이터를 GA4를 활용해 분석하는 방법들을 살펴봤는데, 앞선 방법들 외에도 사용자 재방문이나, 유입 키워드를 통해 분석을 한다거나 등의 블로그의 데이터를 분석할 수 있는 다양한 방법들이 존재합니다. 여러가지 분석을 시도해보면서 분석결과를 블로그의 작성방향에 참고한다면 더 좋은 블로그를 만들어나갈 수 있을 것입니다.

### 참고

- [https://contentsmarketing.co.kr/blog/1view](https://contentsmarketing.co.kr/blog/1view)
- [https://databox.com/google-analytics-blog-post-performance](https://databox.com/google-analytics-blog-post-performance)
- [https://ken-williams.com/guide/overview/where-did-bounce-rate-go-in-google-analytics-4/](https://ken-williams.com/guide/overview/where-did-bounce-rate-go-in-google-analytics-4/)
- [https://dockyum.tistory.com/37](https://dockyum.tistory.com/37)