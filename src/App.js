import logo from "./logo.svg";
import "./scss/app.scss";
import Header from './components/Header';
import Tabs from "./components/Tabs";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Tabs />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price="5000" />
            <PizzaBlock title="Мексиканская" price="5000" />
            <PizzaBlock title="Мексиканская" price="5000" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
