import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Обновите состояние, чтобы следующий рендер показал запасной UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // Вы также можете записать информацию об ошибке в соответствующее хранилище
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Вы можете отрендерить любой запасной UI
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props;
  }
}
