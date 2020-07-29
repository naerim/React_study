
## Redux
npm i redux react-redux <br/><br/>

리액트 상태 관리 라이브러리! <br/><br/>
Redux에서는 어떤 사건이 발생하여 state값 변경이 필요하면 action을 발생시킨 후, <br/>
이 객체를 dispatch() 함수의 인자로 넘겨준다. <br/>
그러고 나면 Reducer 함수가 실행된다.


### `Action`
액션이란, 우리가 만들 애플리케이션에서 일어나는 모든 사건들 중에 상태 변화가 필요한 사건들이다.<br/>
type 필드를 반드시 가지고 있어야 하고 그 외의 값들은 나중에 상태 업데이트를 할 때 참고해야 할 값이다.

### `리듀서(Reducer)`
reducer은 두 가지 인자를 받는데, <br/>
첫 번째는 이전 상태 정보, 두번째는 아까 발생한 액션 객체이다. <br/>
리듀서 함수가 상태를 업데이트하면 그에 따라서 render가 다시 일어나 화면이 바뀐다.

### `스토어(Store)`
스토어는 우리의 어플리케이션 상태가 보관되는 하나의 저장소이다. <br/>
스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가 있다. <br/><br/>

## Note!

### `createStore`
createStore는 Store를 만들어주는 역할을 해준다. Reducer들을 store안에 넣어주어서 서로 연결해준다. <br/>
// const store = createStore(rootReducer);

### `CombineReducers`
CombineReducers는 많은 Reducer들을 하나로 합쳐 하나의 Reducer로 관리할수 있게 만들어준다

### `immer`
npm i immer <br/><br/>
모듈의 상태가 복잡해질수록 불변성을 지키기 어렵다. 그래서 immer를 사용하면 훨씬 더 편리하게 상태를 관리할 수 있다.
<br/>
produce 함수는 두 개의 인자(현재 상태, producer 함수)를 받는다.<br/>
**현재 상태**는 우리의 시작점을 결정하고, producer 함수는 무슨 일이 발생해야 하는지를 표현한다. <br/>
producer 함수는 현재 상태인 **draft**를 인자로 받는다.
draft에 가해지는 어떠한 수정이라도 기록되고 다음 상태를 만들어 내는데 사용된다. <br/>
현재 상태는 이 과정 중에서 본래 상태를 유지한다. <br/><br/>

실수한 점! <br/>
produce 안의 switch문 default에 액션의 초기값을 넣어두었었다.. 그래서 액션을 발생시켰을 때 두개의 리듀서 함수가 동시에 반응해서 애를 먹었었다 8ㅅ8 <br/>
