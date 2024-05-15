# Check-it

<img src="https://github.com/yuliaReut/Check-it/actions/workflows/check.yml/badge.svg" alt="sign of workflow state">

- Deploy: https://yuliareut.github.io/Check-it/
- API: https://kinopoiskapiunofficial.tech/documentation/api/
- Основной функционал:
  Приложение для просмотра информации по фильмам, с возможностью поиска по названиям фильмов. Можно сохранять понравившиеся фильмы, а также свою историю поисковых запросов. Имеет минималистичный дизайн и удобный интерфейс.

### Реализация требований:

**1 уровень (обязательный - необходимый минимум):**

- [x] Реализованы **Требования к функциональности.**
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**.

**React**

- [x] Пишем функциональные компоненты c хуками.
- [x] Есть разделение на умные (https://github.com/yuliaReut/Check-it/blob/main/src/components/my-list-component/my-list-component.jsx) и глупые компоненты(https://github.com/yuliaReut/Check-it/blob/main/src/components/logo-component/logo-component.jsx).
- [x] Есть рендеринг списков (https://github.com/yuliaReut/Check-it/blob/main/src/components/films-list-component/films-list-component.jsx).
- [x] Реализованы формы (https://github.com/yuliaReut/Check-it/blob/main/src/components/sigh-in-component/sigh-in-component.jsx).
- [x] Есть применение Контекст API (https://github.com/yuliaReut/Check-it/blob/main/src/components/theme-component/theme-component.jsx).
- [x] Есть применение предохранителя ([https://ru.reactjs.org/docs/error-boundaries.html](https://github.com/yuliaReut/Check-it/blob/main/src/components/error-boundery/error-boundery.jsx)).
- [x] Есть хотя бы один кастомный хук (https://github.com/yuliaReut/Check-it/blob/main/src/hooks/use-auth.js).
- [x] Хотя бы несколько компонентов используют PropTypes (https://github.com/yuliaReut/Check-it/blob/main/src/components/my-list-component/my-list-component.jsx).
- [x] Поиск не должен триггерить много запросов к серверу (debounce) (https://github.com/yuliaReut/Check-it/blob/main/src/hooks/use-debounce.js).
- [x] Есть применение lazy + Suspense (https://github.com/yuliaReut/Check-it/blob/main/src/components/movies-loader-component/movies-loader-component.jsx).
      **Redux**
- [x] Используем **Modern Redux with Redux Toolkit**.
- [x] Используем **слайсы** (https://github.com/yuliaReut/Check-it/blob/main/src/store/user/user-slicer.js).
- [x] Есть хотя бы одна **кастомная мидлвара** (**[store ⇒ next ⇒ action ⇒ {}](https://redux.js.org/understanding/history-and-design/middleware)** или **`[createListenerMiddleware](https://redux-toolkit.js.org/api/createListenerMiddleware)`** ) (https://github.com/yuliaReut/Check-it/blob/main/src/middlewares/auth-middleware.js).
- [x] Используется RTK Query.
- [x] Используется Transforming Responses (https://github.com/yuliaReut/Check-it/blob/main/src/api/kinopoisk-api.js).
