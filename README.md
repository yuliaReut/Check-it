<<<<<<< HEAD
# Check-it
<img src="https://github.com/yuliaReut/Check-it/actions/workflows/check.yml/badge.svg" alt="sign of workflow state">
=======

- Deploy: https://yuliareut.github.io/Check-it/
- API: https://kinopoiskapiunofficial.tech/documentation/api/

<<<<<<< HEAD
### Что сделано
- [x] Написаны функциональные компоненты c хуками.(https://github.com/yuliaReut/Check-it/blob/main/src/components/video-component/video-component.jsx)
- [x] Реализован рендеринг списков на основе запроса на сервер с использованием API- kinopoiskApi.(https://github.com/yuliaReut/Check-it/blob/main/src/components/films-list-component/films-list-component.jsx)
- [x] Есть маршрутизация, но еще нет приватной. (https://github.com/yuliaReut/Check-it/blob/main/src/components/app-component/app-component.jsx)
- [x] Использую Redux Toolkit (https://github.com/yuliaReut/Check-it/blob/main/src/api/kinopoisk-api.js)


- [ ] Очень много мусора, я его потом уберу, когда разберусь, как делать авторизацию

- [ ] Еще у меня не получается сделать диплой, чтобы в стилях был адрес не такой href="css/main.min.css", а такой href="/Check-it/css/main.min.css", пол дня ковырялась так и не получилось настроить.


Основной функционал:

###Реализация требований:
1 уровень (обязательный - необходимый минимум):
=======
### Реализация требований:
**1 уровень (обязательный - необходимый минимум):** 
- [ ]  Реализованы **Требования к функциональности.**
- [x]  Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**.
**React**
>>>>>>> repforme
- [x] Пишем функциональные компоненты c хуками.
- [x] Есть разделение на умные и глупые компоненты.
- [x] Есть рендеринг списков.
- [x] Реализованы формы.
- [ ] Есть применение Контекст API.
- [x] Есть применение предохранителя (https://ru.reactjs.org/docs/error-boundaries.html).
- [ ] Есть хотя бы один кастомный хук.
- [x] Хотя бы несколько компонентов используют PropTypes.
- [ ] Поиск не должен триггерить много запросов к серверу (debounce).
- [ ] Есть применение lazy + Suspense.
**Redux**
- [x]  Используем **Modern Redux with Redux Toolkit**.
- [x] Используем **слайсы** (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice).
- [ ] Есть хотя бы одна **кастомная мидлвара** (**[store ⇒ next ⇒ action ⇒ {}](https://redux.js.org/understanding/history-and-design/middleware)** или **`[createListenerMiddleware](https://redux-toolkit.js.org/api/createListenerMiddleware)`** ).
- [x] Используется RTK Query.
- [ ] Используется Transforming Responses.

### 2 уровень (необязательный):
- [x] Настроен CI/CD. (https://github.com/yuliaReut/Check-it/blob/main/.github/workflows/check.yml)
>>>>>>> main
