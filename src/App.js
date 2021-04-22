import "./App.css";
import Header from "./Header";
import Background from "./Background";
import Search from "./Search";
import CityDate from "./CityDate";
import Today from "./Today";
import Temp from "./Temp";
import HourForecast from "./HourForecast";
import DayForecast from "./DayForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <br />

        <Background />
        <br />

        <div className="weather-app">
          <Search />
          <br />

          <HourForecast />
          <br />

          <DayForecast />
          <br />

          <Footer />
        </div>
      </div>
    </div>
  );
}
