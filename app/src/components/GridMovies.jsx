import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const GridMovies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <div>
      {movie && (
        <>
          <Grid
            style={{
              height: "400px",
            }}
            data={movie}
          >
            {console.log(movie)}
            <Column field="ProductID" title="ID" width="40px" />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="In stock" />
          </Grid>
        </>
      )}
    </div>
  )
}

export default GridMovies