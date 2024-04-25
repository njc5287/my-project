import './App.css';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';

const App = () => {
  return (
    <div className="container-lg">
      <h3>List of Movies</h3>
      <div className="row">
      <div className="col-lg-4 col-md-7 col-sm-3">
        <Movie />
        </div>
      <div className="col-lg-4 col-md-7 col-sm-3">
        <Movie />
        </div>
      <div className="col-lg-4 col-md-7 col-sm-3">
      <Movie />
    </div>
    </div>
    </div>
  
  );
};

export default App;
