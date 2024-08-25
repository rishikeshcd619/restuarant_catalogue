import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://images-platform.99static.com//dHKNZHpjCOlNh2mM59Cy8kcjDJ0=/0x0:960x960/fit-in/500x500/99designs-contests-attachments/127/127747/attachment_127747557"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restuarant-container">Container</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;
