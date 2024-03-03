import { Outlet } from 'react-router-dom';
// import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import './App.css';
import Navbar from './components/Navbar';
// import GridMovies from './components/GridMovies';

function App() {
  
  return (
    <>
      <div className="App">
        <Navbar />
        {/* <GridMovies /> */}
        {/* <Grid
          style={{
              height: "400px",
          }}
          data={products}
          >
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" />
          <Column field="UnitsInStock" title="In stock" />
      </Grid> */}
        <Outlet />
      </div>
    </>
  )
}

export default App
