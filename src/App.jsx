import CountryList from "./components/CountryList";
import Header from "./components/Header";
import RegionFilter from "./components/RegionFilter";
import SearchFilter from "./components/SearchFilter";
import { CountriesProvider } from "./context/CountriesContext";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto mt-4 px-8 flex flex-col">
        <CountriesProvider>
          <Header />
          <SearchFilter />
          <RegionFilter />
          <CountryList />
        </CountriesProvider>
      </div>
    </div>
  );
}

export default App;
