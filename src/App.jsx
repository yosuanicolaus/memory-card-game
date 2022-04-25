import "./App.scss";

function App() {
  return (
    <div className="App text-center bg-secondary bg-gradient">
      <div className="display-5 bg-dark bg-gradient text-light py-3">
        Memory Game
      </div>
      <div className="container">
        <div className="row justify-content-center gx-3 gy-3 py-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="bg-primary bg-gradient text-light border border-2 rounded-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit et
        eum recusandae ipsam itaque doloribus temporibus, modi incidunt
        deserunt.
      </div>
    </div>
  );
}

export default App;
