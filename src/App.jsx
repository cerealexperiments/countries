import CountryList from "./components/CountryList";
import Header from "./components/Header";
import Filters from "./components/Filters";
import { CountriesProvider } from "./context/CountriesContext";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto mt-4 px-8 flex flex-col mb-8">
        <CountriesProvider>
          <Header />
          <Filters />
          <CountryList />
        </CountriesProvider>
      </div>
    </div>
  );
}

export default App;
