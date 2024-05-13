# Check-it
<img src="https://github.com/yuliaReut/Check-it/actions/workflows/check.yml/badge.svg" alt="sign of workflow state">


- Deploy: https://yuliareut.github.io/Check-it/
- API: https://kinopoiskapiunofficial.tech/documentation/api/

Приложение для просмотра информации по фильмам, с возможностью поиска по названиям фильмов. Можно сохранять понравившиеся фильмы, а также свою историю поисковых запросов. Имеет минималистичный дизайн и удобный интерфейс.

Основной функционал:

### Реализация требований:
**1 уровень (обязательный - необходимый минимум):** 
- [x]  Реализованы **Требования к функциональности.**
- [x]  Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**.

**React**
- [x] Пишем функциональные компоненты c хуками.
- [x] Есть разделение на умные и глупые компоненты.
- [x] Есть рендеринг списков.
- [x] Реализованы формы.
- [x] Есть применение Контекст API.
- [x] Есть применение предохранителя (https://ru.reactjs.org/docs/error-boundaries.html).
- [x] Есть хотя бы один кастомный хук.
- [x] Хотя бы несколько компонентов используют PropTypes.
- [x] Поиск не должен триггерить много запросов к серверу (debounce).
- [x] Есть применение lazy + Suspense.
**Redux**
- [x]  Используем **Modern Redux with Redux Toolkit**.
- [x] Используем **слайсы** (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice).
- [x] Есть хотя бы одна **кастомная мидлвара** (**[store ⇒ next ⇒ action ⇒ {}](https://redux.js.org/understanding/history-and-design/middleware)** или **`[createListenerMiddleware](https://redux-toolkit.js.org/api/createListenerMiddleware)`** ).
- [x] Используется RTK Query.
- [x] Используется Transforming Responses.

### 2 уровень (необязательный):
- [x] Настроен CI/CD. (https://github.com/yuliaReut/Check-it/blob/main/.github/workflows/check.yml)

