import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import SingleBook from "./Components/SingleBook";
import fantansyBooks from "./fantansyBooks.json";
import BookList from "./Components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="I am alert" color="danger" />
        <MyBadge text="9" color="success" />
        <SingleBook book={fantansyBooks[0]} />
        <BookList books={fantansyBooks} />
      </header>
    </div>
  );
}

export default App;
