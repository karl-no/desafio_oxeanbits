import { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';
import '@progress/kendo-ui';
import './GridMovies.css';

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const imagesURL = import.meta.env.VITE_IMG;

class GridMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter: {
        logic: 'and',
        filters: [{
          field: 'original_title',
          operator: 'contains',
          value: ''
        }]
      },
    };
  }

  componentDidMount() {
    this.getTopRatedMovies();
  }

  async getTopRatedMovies() {
    try {
      const response = await fetch(`${moviesURL}top_rated?${apiKey}`);
      const data = await response.json();
      this.setState({
        data: data.results,
      });
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  }

  handleFilterChange = (event) => {
    this.setState({
      data: this.getMovies(event.filter),
      filter: event.filter
    });
  }

  getMovies = (filter) => filterBy(this.state.data, filter);

  render() {
    return (
      <div className="GridMovies">
        <div className='movies-grid'>
          <Grid
            data={this.state.data}
            style={{maxHeight: '500px'}}
            filterable={true}
            filter={this.state.filter}
            filterChange={this.handleFilterChange}>
            <Column
              field='poster_path'
              title='Filme'
              cell={(props) => (
                <td>
                  <Link to={`/movie/${props.dataItem.id}`}>
                    <img
                      src={imagesURL + props.dataItem.poster_path}
                      alt={props.dataItem.original_title}
                      style={{ maxWidth: '100px', maxHeight: '150px' }}
                      className='movie-poster'
                    />
                  </Link>
                </td>
              )}
            />
            <Column field='title' title='Nome'/>
            <Column field='original_title' title='Nome original'/>
            <Column field='vote_average' title='Nota' filter='numeric'/>
            <Column field='release_date' title='Lançamento' filter='numeric'/>
          </Grid>
        </div>
      </div>
    );
  }
}

export default GridMovies;
