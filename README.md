# 🎞 Whyisitreal?

- Whyisitreal (이왜진)은 평가 데이터에 기반한 영화 리뷰 / 추천 기능을 제공하는 커뮤니티 서비스입니다.

---

### 🛠 Tech Stack & Tool

- BackEnd: `Python 3.10.1`  `Django 3.2.13`
- FrontEnd: `HTML` `CSS` `Javascript` `Vue 2.7.14`
- Design: `Bootstarp` `Figma`
- Others: `Git` `Notion` `Visual Studio Code` `Octopus.do` `Draw.io`

## 👫 팀원 및 역할 분담

- 이예진 : `FrontEnd Main`, `BackEnd Sub`, `Design`
- 손민혁 : `BackEnd Main,` `FrontEnd Sub`, `Algorithm`

---

### 🛫 Why Whyisitreal?

1. 서비스의 필요성
    
    다양한 영화와 플랫폼들이 쏟아지면서 자신에게 맞는 영화를 시청하고 싶어하는 사용자가 증가하고 있다. 기존 서비스들은 영화 추천 기능 또는 커뮤니티 기능만 존재하기 때문에 모두 한 번에 이용하고 싶어하는 사용자들에게 불편함이 존재한다.
    
2. 서비스 사용자
    
    영화 검색 시간을 줄여 자신의 취향에 맞는 영화를 추천받아 시청하고, 영화에 대한 리뷰를 남겨 타인과 공유하고 싶어하는 10-30대 (이후 확장 예정)
    
3. 현 유사 서비스
    - 영화 추천 서비스
        1. 넷플릭스 
            - 유사 사용자 기반 알고리즘, 유사 아이템 기반 알고리즘, 잠재 모델 기반 알고리즘, 콘텐츠 기반 알고리즘
            
            [넷플릭스의 영화 추천 알고리즘](https://brunch.co.kr/@cysstory/159)
            
        2. 왓챠
            - 유사 사용자 기반 알고리즘, 유사 콘텐츠 기반 알고리즘
            - 넷플릭스와 차이점이 있다면 왓챠는 가입단계에서 정확한 데이터(취향)를 사용자에게 요구함
            
            [넷플릭스와 왓챠 영화추천 알고리즘](https://bumi1004.tistory.com/entry/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%99%93%EC%B1%A0-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
            
        
        - 기존 OTT 서비스는 주로 시청 시간, 시청 기간대, 시청 디바이스, 재시청 비율 등 다양한 데이터를 바탕으로 추천 알고리즘을 마련하는데,  API를 가져다 쓰는 우리는 이러한 기반의 알고리즘을 구현하기 쉽지 않았다.
            
            → 그래서 기존 잘 구현된 알고리즘을 바탕으로 우리만의 아이디어를 활용해 새로운 알고리즘을 구현했다.
            

- 영화 커뮤니티 서비스
    1. 왓챠
        - 각 영화별 평점과 간단한 코멘트가 있어 직관적이지만 댓글을 달거나 자세한 리뷰를 작성할 수는 없음.
        
        ![watcha](https://user-images.githubusercontent.com/67399771/203859780-80bbb170-734f-46ca-a852-fdecbfbf6b14.png)
        
    2. 네이버 영화
        - 영화에 대한 리뷰(자세함) / 평점(간단한 코멘트)가 있음. 또한 추천과 좋아요 /기능이 있어 타 사용자들의  커뮤니케이션이 비교적 활발한 편.
        
        ![naver1](https://user-images.githubusercontent.com/67399771/203859758-343019a1-066b-4d63-aed7-9778c211fdf0.png)
        
        ![naver2](https://user-images.githubusercontent.com/67399771/203859760-4989939a-f195-472b-ba20-217a044ae319.png)
        
    - 직관성/편리성 vs 자세한 정보 제공이라는 각각의 장점이 존재
    
    → 직관성과 편리성이 UX 측면에서 더 가치있다고 판단하여 영화에 대한 간단한 리뷰 기능만 구현하기로 결정
    

---

### 🛫 About Whyisitreal

- ERD
    
    ![erd](https://user-images.githubusercontent.com/67399771/203859754-04958938-5a8a-4a11-bdad-62340ebcf8ff.png)
    

- 컴포넌트 구조도
    
    ![structure](https://user-images.githubusercontent.com/67399771/203859776-668f9297-2365-4706-800e-168d92b6e64b.png)
    

- 서비스 주기능, 부기능(상세기능)
    - 주기능 (MVP)
        - 사용자 좋아요 기반 영화 추천
        - 영화별 리뷰 커뮤니티
    - 부기능
        - 최신 영화 추천
        - 관련 영화 추천
        - 오늘의 영화 추천
        - 나만 당할 수 없지 영화 추천 (최하 평점, 최하 관객 수 영화)
        - 영화 검색 기능
        - 프로필 기능
        
- DB (fixtures)
    - all_movies.json : TopRated 영화 10,000개
    - genres.json : 19개의 영화 장르

- API (TMDB)
    - TopRatedMovies
    - GetMovie
    - Recommendation
    - Latest
    - Similar

- 사용자 좋아요 기반 영화 추천
    - 회원가입 시 48개의 영화 목록을 띄워주는 페이지로 이동해 사용자가 즐겨봤던 영화를 고를 수 있게 합니다.
        
        ![signup](https://user-images.githubusercontent.com/67399771/203859772-39c1d438-1316-4113-bf04-06556cf73e2f.png)
        
        ![selection](https://user-images.githubusercontent.com/67399771/203859770-3a95be4e-e5fb-48a4-a4ac-0dc294630245.png)
        
        - <알고리즘>
            1. 10,000개의 영화 DB를 for문을 이용해 장르별로 분류
            2. 유저가 기존에 봤던 익숙한 영화를 노출시키기 위해 `popularity` 필드가 100이상인 영화만 필터링
            3. 장르 별 최소 1개 이상의 영화가 포함될 수 있도록 하여 사용자에게 노출 (genre_id 99번인 다큐멘터리는 10,000개 DB에 하나도 없으므로 제외)
            
    - 사용자가 좋아요를 누른 영화에 대한 정보를 기반으로 다른 영화를 추천해줍니다.
        
        ![like_recommendation](https://user-images.githubusercontent.com/67399771/203859757-cf144982-fde2-4025-9dde-404b6ab5e7fc.png)
        
    
    - <알고리즘>
        1. 해당 사용자를 불러와서 `like_movies.all()`을 사용하여 좋아요한 영화 리스트를 생성
        2. for문으로 list를 순회하여 recommendation API로부터 추천영화 목록을 받아옴
        3. 추천된 영화의 횟수를 카운트하여 중복을 제거하고 내림차순으로 정렬
        4. 0~19번 인덱스까지 슬라이싱해서 가져오고 이 중에서 12개의 영화를 랜덤으로 추출
        5. 12개의 영화가 현재 DB에 존재하지 않는다면 DB에 저장도 해줌
        6. 메인페이지가 렌더링될 때마다 12개의 좋아요 기반 추천영화들을 보여줌
    
- 영화별 리뷰 커뮤니티
    - 관련 영화 추천
        
        ![similar](https://user-images.githubusercontent.com/67399771/203859774-822b05ed-aba7-443b-b35a-779ab3af4c6d.png)
        
    
    - <알고리즘>
        1. Similar API를 이용하여 관련 영화 리스트를 가져옴 (영화당 약 80개의 목록이 조냊)
        2. 관련 영화가 12개 이상이면 랜덤으로 12개의 영화를 추출하여 보여주고, 미만이면 갯수만큼 페이지에 보여줌
    - 영화 좋아요 기능
    - 리뷰 CRUD 기능
    
    ![crud](https://user-images.githubusercontent.com/67399771/203859749-bdcf1c18-7c91-4afc-984f-e8fd339c5d0e.png)
    
    - 리뷰 작성자 클릭시 해당 유저 프로필로 넘어가기 기능

- 최신 영화 추천
    
    ![latest](https://user-images.githubusercontent.com/67399771/203859756-b0987f1b-f253-4559-bea4-c0e95911a269.png)
    

- <알고리즘>
    1. Latest API를 이용하여 3페이지까지 (약 120개)의 영화를 불러옴 (페이지가 더 존재하지만 이미 popularity 기준 내림차순으로 정렬되어 있어 그 이후 영화를 가져오는 것은 무의미하다고 판단했기 때문)
    2. 120개의 영화 중에서 12개를 랜덤으로 추출
    3. 12개의 영화가 기존 DB에 없다면 DB에 저장해줌 (DB에 없으면 영화 Detail 페이지에 정보를 노출할 수 없기 때문)
    4. 메인페이지가 렌더링될 때마다 12개의 최신 영화들을 보여줌
    
- 오늘의 영화 추천
    
    ![today](https://user-images.githubusercontent.com/67399771/203859778-1128db4f-e857-4c2f-9540-192c524257ea.png)
    
    - <알고리즘>
        1. 현재 날짜 (ex) 20221124) int화하여 일정한 식을 만든 뒤 이와 가장 근접한 movie_id를 추천해줌

- 나만 당할 수 없지 영화 추천 (이런 영화도 있어요!)
    
    ![worst](https://user-images.githubusercontent.com/67399771/203859781-1a4b0ed6-be1b-475e-836e-8ae305119dde.png)
    
    - <알고리즘>
        1. DB에서 popularity가 20 미만,  vote_average가 5.5 미만인 영화들을 뽑아서 1개를 랜덤으로 추천해줌

- 영화 검색 기능
    - 글자단위로 검색가능

![search](https://user-images.githubusercontent.com/67399771/203859763-5edff17f-c7fc-4ac1-aab2-414a5584d8b1.png)

![search2](https://user-images.githubusercontent.com/67399771/203859766-24ef5c71-813c-4108-b093-02302b96adfa.png)



- 프로필 페이지
    - 프로필 이미지 업로드 기능
    - 내가 좋아요한 영화 목록
    - 내가 작성한 리뷰 목록

![profile1](https://user-images.githubusercontent.com/67399771/203859761-73b9c771-de3b-42e1-86ef-212ab7a15209.png)

![profileimage](https://user-images.githubusercontent.com/67399771/203859762-bbac6207-56ab-43c0-aaee-b1e12ffa1a21.png)


---

### 📗 느낀점

- 손민혁
    1. 알고리즘
        - 지금까지 배웠던 교육들과 알고리즘이 굉장히 동떨어져있다고 느껴졌었다.  그러나 영화 추천 알고리즘들을 설계하면서 ‘데이터가 더 많아진다면?’ ‘시간을 더 단축시켜야한다면?’ 과 같은 질문들을 자꾸 던져보게 되면서 알고리즘 공부의 필요성을 확인하는 계기가 되었다. 꾸준히 공부해나가야겠다.
    2. 기획
        - 초반 기획을 잘해야지 개발 단계에서 덜 헤맨다는 이야기를 들어서 기획 단계에 공을 많이 들이려했지만, 개발 지식이 부족해서 기획을 완벽하게 하고 시작할 수가 없었다. 이러한 프로젝트들을 많이 경험하고 더 공부해나가면서 기획 단계에서 좀 더 꼼꼼하게 설계하고 싶다.
    3. 공부방법
        - 이전까지 교재를 보고 코드를 따라치면서 내가 안다고 생각했던 지식들이 막상 프로젝트를 시작하니 내것이 아님을 깨달았다. 일련의 과정와 이유를 이해하지 못하면 프로젝트 안에서 헤맬 수밖에 없음을 알았다. 단순 이론 공부도 필요하겠지만, 역시 무언가 만들어보면서 공부하는 방법이 최고인 것 같다.
    4. 에러
        - 에러를 마주할 때 우리 스스로 문제를 해결한 때도 있었고, 반 친구들의 도움을 얻어 해결했던 적도 있었다. 그렇지만 역시 스스로 스트레스를 받으며 이유를 고민하고 문제를 찾았을 때 성취감이 크고, 더 기억에 오래남는 것 같다. 에러에서 오는 스트레스는 필연적이겠지만 이를 통해 더 성장할 수 있음을 기억하고 긍정적인 마음을 가져야겠다.
    5. 시간 압박
        - 마감일이 존재하는 상황 속에서 조급해지는 스스로를 볼 수 있었다. 결과물을 내는 것도 중요하지만 정해진 시간 속에서 일정을 잘 짜고 실행하는 것 또한 중요하다는 것을 느꼈다. 아마 실무에 가면 항상 데드라인이 존재할 것이고 이 시간 압박은 프로젝트마다 수반될 것이기에 이를 잘 관리하는 연습도 필요할 것 같다.
  
- 이예진 : 처음에는 최종 프로젝트에 대한 부담감이 상당했습니다. 싸피에서 반년동안 많은 것들을 공부했지만 실제 웹페이지를 구현하며 어떻게 적용할 수 있을지, 특히 프로젝트 직전에 배운 장고와 뷰를 함께 쓰는 방법이 어려워서 걱정을 많이 했던 것 같습니다. 하지만 매주 해왔던 관통 프로젝트에서 했던 것들이 도움이 많이 되었고 그동안 배웠던 것들이 어떻게 쓰이는지 알 수 있었습니다. 또 풀리지 않는 문제들이 페어와 머리를 맞대었을 때 풀리고, 다른 팀들과도 방법을 공유하며 개발에서의 협업을 경험하는 좋은 기회가 되었던 것 같습니다. 저의 부족한 점에 대해서도 깨닫고 어느 부분을 더 공부하고 채워야하는지 알게 되었습니다. 백보다 프론트를 선호해 css에 많은 시간을 들였지만, 정작 제대로 알지 못하고 쓰는 것들이 너무나 많았습니다. 백에서도 저의 코딩 실력이 기획을 따라가지 못해서 많이 아쉬웠습니다. 계절학기와 방학을 이용해 부족한 점을 채워서 2학기에는 더 좋은 프로젝트 결과물을 낼 수 있도록 노력하겠습니다.

---

### 💡우리들의 에러 목록

- <문제 1> models와 serializers의 관계. DB를 가져올 때 models의 필드 목록을 기준으로 가져와야하는지 아니면 serializers의 필드 목록을 기준으로 가져와야하는지?
    - model의 필드 기준으로 가져와야한다. serialzier는 말 그대로 models 기준 필드를 가지고 있는 DB를 front에 보내주기 위한 형태로 바꾸어주는 것이기 때문에.

- <문제 2> User model 커스터마이징
    - [https://docs.djangoproject.com/en/4.1/topics/auth/customizing/](https://docs.djangoproject.com/en/4.1/topics/auth/customizing/)
    1. [settings.py](http://settings.py)에 `AUTH_USER_MODEL = accounts.User'
    
    ```python
    AUTH_USER_MODEL = 'accounts.User'
    ```
    
    1. accounts/models.py에 상속 (커스터마이징)
    
    ```python
    from django.db import models
    from django.contrib.auth.models import AbstractUser
    
    # Create your models here.
    
    class User(AbstractUser):
        pass
    ```
    
- <문제 3: 주저하는 데이터를 위해…> : API로 불러온 데이터를 DB 저장하고 fixture에 저장하는 법
1. models.py에 모델을 만들고 자신이 가져올 필드명과 적절한 field형식을 적어준다.

```python
# modles.py

class Movie(models.Model):
    movie_id = models.IntegerField()
    title = models.CharField(max_length=100)
    overview = models.TextField()
    popularity = models.FloatField()
    release_date = models.DateField()
    vote_average = models.FloatField()
    poster_path = models.CharField(max_length=300)
    genre_ids = models.TextField(null=True)  # 리스트인데 나중에 바꿔주기 위해 일단 그냥 str 형태로 필드 설정해줌
		# genre_ids JSONField로 해주면 그냥 해결됨... (굳이 개고생하지 마세요.. 11.18 민혁)
```

1. url → [views.py](http://views.py)에서 API 주소로 DB를 가져올 함수를 만든다

```python
import requests
import json
from .models import 모델이름

def get_movie(request):

    for i in range(1, 51):
        URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a10047aa70542f33ac2138abb4e13bb7&language=ko-kr&page=' + str(i)

        print(i)  # 그냥 출력 확인용
        response = requests.get(URL).json()
        movies = response['results']

        for movie in movies:
            added_movie = Movie(       
                movie_id = movie['id'],   
                title = movie['title'],
                overview = movie['overview'],
                release_date = movie['release_date'],
                popularity = movie['popularity'],
                vote_average = movie['vote_average'],
                poster_path = movie['poster_path'],
                genre_ids = json.dumps(movie['genre_ids']),  # 리스트를 str으로 만들어주는 과정 (JSONField로 가져오면 이거 dumps 쓸 필요 x)
                # genre_names = json.dumps()
            )
            added_movie.save()

    return render(request, 'movies/') # 이건 그냥 return 하려고 했던거라 굳이 신경 안 써도 됨
```

1. 이후 적절한 설정한 url로 이동하면 해당 함수가 실행되게 해주면 DB에 데이터들이 추가된다.
2. dump data를 이용해서 fixture에 json 파일을 생성해준다.

```python
# 기존에 사용한 코드 (한글 안됨)
python manage.py dumpdata --indent 2 movies.movie > movies.json

# 새롭게 사용한 코드 (이렇게 하면 한글까지 됨) ---> 적극 사용 권장
python -Xutf8 ./manage.py dumpdata --indent 2 movies.movie > movies.json
```

1. .json 파일에서 `""` 로 감싸져있는 genre_ids (리스트)의 “”를 다 풀어준다.  (Ctrl + D) 사용해라…
2. 그리고 다시 받아올 때 genre_ids 필드가 textField로 되어 있으면 또 str으로 바뀌어버리니 JSONField로 설정해주면 loaddata할 때 정상적으로 리스트로 load됨

- <문제 4> : 해당 movie에 대한 review를 작성하려고 하는데 자꾸 movie에 대한 정보를 입력해야했다.
    - 이 경우 [serializers.py](http://serializers.py)에 read_only_fields를 추가해주면 된다!!!
    
    ```python
    class ReviewSerializer(serializers.ModelSerializer):
    
        class Meta:
            model = Review
            fields = '__all__'
            read_only_fields = ('movie',)
    ```
    
- <문제 5> : 리뷰를 생성하자마자 출력되게 하는 방법
1. 리뷰를 create하면 부모 컴포넌트인 Detailview에 emit으로 신호를 보낸다
2. Detailview에서 신호를 받으면 getReviews함수를 실행해서 axios로 해당 영화 리뷰를 불러온다
3. ReviewList로 reviews 리스트를 prop 해준다
4. ReviewList에서 ReviewListItem으로 v-for문을 돌면서 review객체를 하나씩 prop해줘서 출력한다

```python
# ReviewCreate
methods: {
    createReview() {
      const content = this.content
      if (!content) {
        alert('내용을 입력해주세요')
        return 
      } 

      axios({
        method: 'post',
        url: `${API_URL}/movies/${this.$route.params.id}/reviewcreate/`,
        data: { content },
      })
        .then((res) => {
          console.log(res)
          this.$emit('createReview')
          this.content = null
        })
        .catch((err) => {
          console.log(err)
        })
    }

# DetailView
<ReviewCreate @createReview="getReviews"/>
<ReviewList :reviews="reviews"/>

data() {
    return {
      movie: null,
      reviews: [],
    }
  },
created() {
    this.getMovieDetail()
    this.getReviews()
  },
methods: {
	getReviews() {
      axios({
        method: 'get',
        url: `${API_URL}/movies/${this.$route.params.id}/reviews/`,
      })
        .then((res) => {
          console.log(res.data)
          this.reviews = res.data
        })
        .catch((err) => {
          console.log(err)
        })

# ReviewList
props: {
    reviews: Array,
  }

# ReviewListItem
props: {
    review: Object,
  },
```

- <문제 6> : 리뷰 삭제할 때 한 개 남았을 때 오류가 뜬다. 어떻게 해결하나?
    - 먼저 emit → emit을 해줘서 detail이 v-on으로 getreview 메서드를 실행하게 한다!!!
    - 마지막 한 개가 남았을 때 delete 함수를 실행하면 삭제되고 detail에서 getreview 메서드를 실행하는 과정에서 리뷰가 더이상 없기 때문에 404에러가 뜬다.
    - 이를 해결하기 위해 이예진은 아래와 같이  404에러가 발생할 시에 리뷰에 null 값을 넣어주어 해결해버렸다는 해피엔딩~~~
    
    ```python
    
    ---- listitem.vue ---- 
    methods: {
        deleteReview() {
          axios({
            method: 'delete',
            url: `${API_URL}/movies/${this.$route.params.id}/reviews/${this.review.id}`,
            headers: {
                Authorization: `Token ${ this.$store.state.token }`
            }
          })
            .then((res) => {
              console.log(res)
              **this.$emit('deleteReview')**
    
    --- list.vue----
    <template>
      <div>
        <p v-if="!reviews">리뷰가 없습니다</p>
        <ReviewListItem
          v-for="review in reviews"
          :key="review.id"
          :review="review"
          **@deleteReview="deleteReview"**
        />
      </div>
    </template>
    
    ---- detail.vue ----
    
    <template>
      <div>
        **<ReviewList :reviews="reviews" @deleteReview="getReviews"/>**
      </div>
    </template>
    	
    
    getReviews() {
          axios({
            method: 'get',
            url: `${API_URL}/movies/${this.$route.params.id}/reviews/`,
          })
            .then((res) => {
              // console.log(res.data)
              this.reviews = res.data
            })
            **.catch((err) => {
              if (err.response.status === 404) {
                this.reviews = null**
              }
            })
        }
      }
    ```
    

- <문제 7>: 장고에서 like함수를 실행시켜서 좋아요 여부를  true/false로 변경시키고 어디로 보내야할지 몰랐다.. (왜냐면 기존에는 serialzier를 사용해서 전부 다 Response 보냈기 때문에..)
    - 그냥 context에 우리가 보내고자하는 정보를 넣은 다음에 Response로 보내주었다.
    - 그러면 Vue에서 axios 요청으로 해당 url을 가져와서 함수를 실행하면 .then 안의 response에서 context의 정보들을 받아올 수 있다!!!
    
    ```python
    @api_view(['POST'])
    @permission_classes([IsAuthenticated])
    def review_likes(request, movie_pk, review_pk):
        review = Review.objects.get(pk=review_pk)
    
        if review.like_users.filter(pk=request.user.pk).exists():
            review.like_users.remove(request.user)
            is_like = False
        else:
            review.like_users.add(request.user)
            is_like = True
    
        **context = {
            'is_like': is_like,
        }
        return Response(context)**
    ```
    

- <문제 8> : 모델에 새로운 필드를 추가했을 때 새로운 리뷰가 만들어지지 않았다. (user모델 추가, like_users모델 추가했을 때)
    - serializers.py에서 read_only_fields에 해당 필드를 추가해주면 해결!!
    
    ```python
    
    ---serializers.py---
    
    class ReviewSerializer(serializers.ModelSerializer):
    
        class Meta:
            model = Review
    
            fields = '__all__'
            **read_only_fields = ('movie', 'user', 'like_users',)**
    ```
    

- <문제 9> : 로그인 한 유저의 [user.pk](http://user.pk)를 어떻게 가져오는지?
    - 장고에서 accounts/user에 토큰과 함께 보내주면 받아올 수 있다!!!
    
    ```
    
    <script>
    import axios from 'axios'
    
    const API_URL = 'http://127.0.0.1:8000'
    
    export default {
      name: 'ReviewListItem',
      data() {
        return {
          userId: null,
        },
      created() {
        this.getId()
      },
      methods: {
        getId() {
          axios({
            method: 'get',
            url: `${API_URL}/accounts/user`,
            headers: {
                Authorization: `Token ${ this.$store.state.token }`
            }
          })
            .then((res) => {
              this.userId = res.data.pk
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    }
    </script>
    ```
    

- <문제 10 ★ 대장에러> : 해당 리뷰에 유저가 좋아요 했는지 안 했는지 어떻게 초기 화면에서 노출시켜줄 수 있는지?
    - creatd 할 때 get_id 메서드를 써서 로그인된  user된 id를 불러왔다.
    - computed에서 isLike함수를 사용해서 해결했다.
        - 부가 설명으로 해당 리뷰를 좋아요 한 모든 목록에서 현재 유저 아이디가 존재하는지를  includes를 사용해서 확인해서 초기값을 템플릿에 노출시켰다. (해피)
            - 조금 더 설명하자면 setters 어쩌구 에러가 떠서 isLike 하위구조를  get()과 set()으로 구분해주었더니 에러가 사라져버렸다~~~
            
- <문제 11 ★ 대장에러> : 이번에는 초기값을 잘 받아오고 버튼을 눌렀을 때 저장된 값은 잘  TRUE/FALSE로 바뀌는데 화면은 좋아요/좋아요취소가 바뀌지가 않아서 미칠 노릇이었다. (2시간 소모)
    - 이를 위해 수많은 동지들을 소환했다. 고병따거, 동준좌, 최후의 수단 데이비드유..
    - 결국    **`:id="'like-btn-' + review.id"`** id값을 **``${}`** `이따구로 안주고 왼쪽 같이 주었더니 해결되었다...

```python
<template>
  <div>
    <span>{{ review.content }}</span>
    <button @click="deleteReview">삭제</button>
    <button
      **:id="'like-btn-' + review.id"**
      v-if="!isLike" @click="reviewLike">좋아요</button>
    <button 
      **:id="'like-btn-' + review.id"**
      v-if="isLike" @click="reviewLike">좋아요 취소</button>
  </div>
</template>

export default {
  name: 'ReviewListItem',
  data() {
    return {
      **userId: null,**
    }
  },
  props: {
    review: Object,
  },
  created() {
    this.getId()
  },
  **computed: {**
    **isLike: {**
      **get() {**
        **return this.review.like_users.includes(this.userId)**
      },
      **set() {**

      }
    }
  },
  methods: {
    deleteReview() {
      axios({
        method: 'delete',
        url: `${API_URL}/movies/${this.$route.params.id}/reviews/${this.review.id}`,
        headers: {
            Authorization: `Token ${ this.$store.state.token }`
        }
      })
        .then((res) => {
          console.log(res)
          this.$emit('deleteReview')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    reviewLike() {
      axios({
        method: 'post',
        url: `${API_URL}/movies/${this.$route.params.id}/reviews/${this.review.id}/likes/`,
        headers: {
            Authorization: `Token ${ this.$store.state.token }`
        }
      })
        .then((res) => {
          console.log(res)
          **const likeBtn = document.querySelector(`#like-btn-${this.review.id}`);**
          console.log(likeBtn)

          **if (res.data.is_like === true) {
            likeBtn.innerText = '좋아요 취소'
          } else {
            likeBtn.innerText = '좋아요'**
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getId() {
      axios({
        method: 'get',
        url: `${API_URL}/accounts/user`,
        headers: {
            Authorization: `Token ${ this.$store.state.token }`
        }
      })
        .then((res) => {
          this.userId = res.data.pk
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
```

- <문제 12> : MovieListItem에서 axios요청으로 userId를 받아오면 DB에 1000개의 영화가 있어서 엄청난 시간이 걸린다. (너무 비효율적 - 유저 아이디는 다 똑같은데 영화 id에 따라서 가져오기 때문에)
    - 즉, 매번 axios요청을 하는 것은 바람직하지 않고 store.state에 저장하는 것이 맞다고 생각했음! (한 번만 받아오는게)
        - 그리고 이 과정에서 로그인이 된 이후에 아이디를 가져와야 하는데 동시에 실행되거나 아이디를 가져오는 getId 함수가 실행되면 에러가 뜬다.
        - 그래서 axios 안에서 then으로 구분해줘서 동기식으로 반드시 로그인을 마친 뒤에 userId를 가져올 수 있게 해주었다.
    
    ```jsx
    
    --- store/index.js ---
    
    logIn(context, payload) {
          axios({
            method: 'post',
            url: `${API_URL}/accounts/login/`,
            data: {
              username: payload.username,
              password: payload.password
            }
          })
            **.then((res) => {
              context.commit('SAVE_TOKEN', res.data.key)
            })
            .then(() => {
              context.dispatch('getId')
            })**
    
    ```
    

- <문제 13> : 한 v-on event에 대해 두 개의 메서드 동시에 실행하는 방법 (기존에는 한 메서드에서 두개의 동작이 실행 안됐었음 - 왜인지는 모름~~)
    - 이벤트별로 `,`로 구분해주면 됨
    - 그러나 선후 순서관계가 중요한 메서드의 경우에는 바람직하지 않음 (반드시 동기식으로 표현되어야 하기 때문) - 위의 <문제 1> 같이…
    
    ```jsx
    <template>
        <main>
            **<button type="button" @click="event1(), event2()">다중이벤트버튼</button>**
        </main>
    </template>
    <script>
    export default {
        name: '',
        components: {},
        methods: {
            event1() {
                alert('event1')
            },
            event2() {
                alert('event2')
            }
        }
    }
    </script>
    ```
    

- <문제 14> : Detail과 MovieListItem 에서 좋아요를 누르면 axios요청을 통해서 정상적으로 back db가 변경되었지만 MovieView로 가면 초기화된 프론트화면이었다. (그런데 정작 DB에는 true / false가 잘 바뀌어있었음)
    - 문제는 우리가 like_user 필드를 추가하는 과정에서 serializer field에 포함시키지 않았다. (그래서 그냥 ‘__all__’로 예진이가 바꾸어버림) 즉, 백의 db를 serializers를 통해 받아올 때 특정 필드는 받아오지 않고 있던 것이었다!!!!!!!!!!
        - 오류를 잡아낸 방법은 movieListItem의 computed - isLike에서 `console.log(this.movie`  를 찍었더니 like_users라는 필드명이 나오지 않았다. (기존 fields에 ‘title’, ‘id’ 이런거 밖에 없었기 때문)
        
        ```jsx
        class MovieSerializer(serializers.ModelSerializer):
        
            class Meta:
                model = Movie
        
                **fields = '__all__'  // (원래는 fields = '~~~' 이런식이었음)**
        ```
        

- <문제 15> reviewlistitem 목록에서 작성자의 이름을 띄우고 싶은데 작성자의 username을 받아오려면 해당 url이 장고에서 애초에 필요해서 멘붕이었음. (작성자의 이름을 클릭하면 작성자의 profile 페이지로 가고 싶었기 때문…)
    - 절망속에서 아기고양이를 찾아감
    - 그의 야매는 환상적이었다. 애초에 review를 생성할 때 model에 username을 넣어주면 되는 거였다!!!!!
    - special ありがとうございます to 동준좌…
    - 근데 솔직히 왜 front에서는 Review.user까지밖에 안들어가지고 여기서는 requests.user.username까지 들어가지는지 모르겠음…
    
    ```jsx
    --- models.py ---
    
    class Review(models.Model):
        user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
        **username = models.CharField(max_length=100)**
        like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="like_reviews")
        movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
        content = models.TextField()
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
    
    --- serializers.py ----
    
    class ReviewSerializer(serializers.ModelSerializer):
    
        class Meta:
            model = Review
    
            fields = '__all__'
            read_only_fields = ('movie', 'user', **'username'**, 'like_users',)
    
    --- views.py ---
    
    @api_view(['POST'])
    @permission_classes([IsAuthenticated])
    def review_create(request, movie_pk):
        movie = get_object_or_404(Movie, pk=movie_pk)
        user = request.user
        **username = request.user.username   # 이런식으로 유저네임 받아오면 됨 아마 상속받은 모델 필드가 이렇게 되어있는듯**
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(movie=movie, user=user, **username=username**)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    ```
    

- <문제 16> axios 요청 보낼 때 username을 어떻게 보내줘야할지 몰랐다.
    - params를 url에 넣어주어 요청해주면 됨!! (솔직히 손민혁은 아직도 이거 어려움 근데 귀인 이예진이 개고수임 ㄷㄷ )
    - router에 path :username을 사용하는 것임!! (params)
    
    ```jsx
    
    --- router / index.js ---
    {
        **path: '/profile/:username',**
        name: 'profile',
        component: ProfileView
      },
    
    --- profileView.vue ---
    methods: {
        getProfile() {
          axios({
            method: 'get',
            **url: `${API_URL}/accounts/profile/${this.$route.params.username}/`**
          })
            .then((res) => {
              // console.log(res.data)
              this.userData = res.data
            })
            .catch((err) => {
              console.log(err)
            })
    ```
    

- <문제 17> axios요청을 보냈을 때 [views.py](http://views.py) 함수에서 class User를 JSON으로 바꾸지 못해서 계속 에러가 났었다.
    - 이때 person.필드1, person.필드2 이런식으로 일일이 분리해줘서(풀어줘서) context에 넣어서 Response에 쏴주면 잘 작동한다.
    
    ```jsx
    
    --- accounts/views.py ---
    
    # Create your views here.
    @api_view(['GET'])
    def profile(request, username):
        person = get_object_or_404(get_user_model(), username=username) # 현재 이게 class User 형태라 Json 변환이 안 됨
        **context = {
            'username': person.username,
            'first_name': person.first_name,
            'last_name': person.last_name,
            'email': person.email,
        }
        return Response(context)**
    ```
    
- <문제 18> test1 계정으로 profile router rink에 들어간 뒤 test2 계정으로 로그인하고 profile router link에 들어가면 test2가 안뜨고 test1이 떠서 문제였다.
    - 이때 username이 data에 저장되어 있었는데 computed로 바꾸면 실시간 반영이 돼서 잘 동작한다.
    - 기존 코드는 주석처리. data → computed로 바꾸었음
    
    ```jsx
    
    --- app.vue ---
    
    <script>
    export default {
      name: 'App',
      // data() {
      //   return {
      //     userName: this.$store.state.userName
      //   }
      // },
      computed: {
        isLogin() {
          return this.$store.getters.isLogin
        },
        **userName() {
          return this.$store.state.userName
        }**
      },
      methods: {
        logOut() {
          this.$store.dispatch('logOut')
        }
      }
    }
    ```
    

- <문제 19> 페이지 렌더링될 때 자꾸 null값 뜬다고 console 에러 뜰 때
    - 그냥 template에서 v-if 설정해주면 됨.
    
    ```jsx
    
    --- profileView.vue ---
    
    <template>
      <div>
        <h1>ProfileView</h1>
        **<h2 v-if="userData">**{{ userData.username }}</h2>
      </div>
    </template>
    
    <script>
    import axios from 'axios'
    
    const API_URL = 'http://127.0.0.1:8000'
    
    export default {
      name: 'ProfileView',
      data() {
        return {
          userData: null,
        }
      },
    ```
    

- <문제 20> : 새로고침 problem
    - selection 페이지에서 새로고침을 하면 계속 detail 페이지로 이동했다.
        - router의 view 순서가 detail은 `/:id`  로 되어 있어서 selection이 아래에 있을 때 새로고침하면 detail로 갔다.
            - 그래서 selection을 detail 위로 넣어주면 정상적으로 작동함 (10:04 AM 벌써 행복 3코인 적립)
            
            ```python
            ---router/index.js---
            
            **잘못된 예**
            {
                **path: '/:movie_id',**
                name: 'detail',
                component: DetailView
              },
            {
                **path: '/selection',**
                name: 'selection',
                component: SelectionView
              },
            
            **잘된 예시**
            	{
                **path: '/selection',**
                name: 'selection',
                component: SelectionView
              },
              {
                **path: '/:movie_id',**
                name: 'detail',
                component: DetailView
            	}
            ```
            
        
         
        
- <문제 21> : prop problem
    - SelectionList에서 Item으로 prop할 때 계속 array-obj error가 떴었다
        - randomMoviePk, randomMovie로 각각 prop해서 하나는 Object, 하나는 Number로 넣어주었다.
            
            ```python
            구조가 대강 이런식이었음
            
            **{
              pk: 15,
              randomMovies: {
                movie_id: 25,
                title : '너의 이름은'
              },
            }**
            ```
            

- <문제 22> :
    - 프로필 페이지에 내가 좋아요한 영화와 내가쓴 댓글 추가하기 위해 profile 함수에 역참조한 데이터를 추가해주었다.
        - like_movies와 like_reviews는 설정한 related name으로 역참조 해주었고,  그냥 데이터를 보내주었을 때 오류가 나서 **values()**로 값을 추출해주고 **list**로 묶어주었다.
        - my_reviews 값은 외래키 역참조 해주기위해 review_set.all()을 붙여주고 위랑 똑같이 해줌.
    
    ```python
    @api_view(['GET'])
    def profile(request, username):
        person = get_object_or_404(get_user_model(), username=username)
        print(person.review_set.all())
        context = {
            'username': person.username,
            'first_name': person.first_name,
            'last_name': person.last_name,
            'email': person.email,
            **'like_movies': list(person.like_movies.values()),
            'like_reviews': list(person.like_reviews.values()),
            'my_reviews': list(person.review_set.all().values()),**
        }
        return Response(context)
    ```
    

- <문제 23> : id와 movie_id
    - 우리는 movie_id로 url을 불러오고 싶은데 계속 DB에 저장되어있는 id로 url이 불러와졌다. 그래서 내 프로필에서 내가 쓴 리뷰를 확인하려 할 때, movie_id가 뜨지 않고 id가 떠서 아따마가 아팠다.
        - Front route에서 path를 id → movie_id로 편의상 바꿔주고
        - detail에서 axios요청할 때 url에 `this.$route.params.movie_id` 로 보내줬다.
        - 그리고 [views.py](http://views.py) 함수에서 pk를 movie_id로 바꾸어주니 해결
        
        ```python
        --- router/index.js ---
        {
            path: **'/:movie_id',**
            name: 'detail',
            component: DetailView
          },
        
        --- detailview.vue ---
        methods: {
            getMovieDetail() {
              axios({
                method: 'get',
                url: `${API_URL}/movies/${**this.$route.params.movie_id}**`,
              })
        
        --- movies/views.py ---
        
        @api_view(['POST'])
        @permission_classes([IsAuthenticated])
        def movie_likes(request, movie_pk):
            movie = Movie.objects.get(**movie_id**=movie_pk)
        ```
        

- <문제 24> : 알고리즘 리스트내 딕셔너리 정렬
    - 리스트에 딕셔너리가 있으면 list(set(원래리스트))로 하면 에러가 뜸 (중복제거하기 위해 사용했음)

```python
not_redundant_movies = list({recommended_movie['id']: recommended_movie for recommended_movie in recommended_movies}.values())
```

- <문제 25> : 리뷰 리스트에서 id 노출 문제
    - detail 페이지의 MovieList에서 movie_id를 노출시키고 싶은데 그냥 순서인 id가 나왔다.
        - django의 Movie 모델의 primary_key = True를 movie_id에 걸어주면 된다! review가 movie 모델을 foreign key로 참조하고 있기 때문에!

- <문제 26> : 장고 DB에 실시간으로 실시간으로 axios 요청으로 영화 정보를 넣어주고 싶었다. (index 페이지에서 새로고침할 때마다 latest movies 가져올 때)
    - 우리는 movie_id를 Primary_Key로 설정했기 때문에 장고에서 DB 저장할 때 movie_id가 같은 것이 있으면 알아서 걸러준다!!!
    
    ```python
    # 최신영화 추천 및 DB 저장 알고리즘
    @api_view(['GET'])
    def latest_movies(request):
    
        top_movies_json = open('movies/fixtures/all_movies.json', encoding='utf-8')    # topratedmovies DB 10000개
        top_movies = json.load(top_movies_json)  
        
        latest_movies = []
        for i in range(1, 4):
            URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a10047aa70542f33ac2138abb4e13bb7&language=ko-KR&page=' + str(i)
    
            response = requests.get(URL).json()
    
            movies = response['results']
    
            for movie in movies:
                latest_movies.append(movie)
            
            random_latest_movies = random.sample(latest_movies, 12)   
    
    **---- 여기 부분에서 추가되는데 movie_id가 같은게 이미 DB에 존재하면 알아서 걸러줌 (Primary Key이기 때문에)**
    
            for random_latest_movie in random_latest_movies:
                # if random_latest_movie['id'] not in top_movie_ids:
                added_movie = Movie(       
                    adult = random_latest_movie['adult'],
                    movie_id = random_latest_movie['id'],   
                    title = random_latest_movie['title'],
                    genre_ids = random_latest_movie['genre_ids'],  
                    overview = random_latest_movie['overview'],
                    release_date = random_latest_movie['release_date'],
                    popularity = random_latest_movie['popularity'],   
                    vote_average = random_latest_movie['vote_average'],
                    poster_path = random_latest_movie['poster_path'],
                    backdrop_path = random_latest_movie['backdrop_path'],
                )
                added_movie.save()
                print(added_movie)
    
        context = {
            'random_latest_movies': random_latest_movies
        }
    
        return Response(context)
    ```
    
- <문제 27> : 프로필 사진 변경 시에 405 오류가 뜨면서 axios 요청이 잘 가지 않았다.
    - 기존에 <username> url과 <int: user_id> url이 충돌해서 문제가 발생했던 것임
    - django urls에서는 str과 int를 딱히 구분해주지 않는듯