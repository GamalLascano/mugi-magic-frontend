import SearchBar from "../components/searchbar/SearchBar";

export default function Home() {
  return (
    <div className="App bg-gradient-to-br from-slate-200 to-slate-800 min-h-screen">
      <p className="text-3xl font-sans flex justify-center">Mugi magic site</p>
      <SearchBar/>
    </div>
  );
}
