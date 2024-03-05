import { Component } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';
import '@progress/kendo-ui';
// import nutrition from './nutrition.json';
// import './GridMovies.css';

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
    // Você pode chamar a função de busca da API aqui
    // Certifique-se de atualizar o estado 'data' com os dados da API
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
        <div className='nutrition-grid'>
          <h2>Top filmes pelo TMDB</h2>
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
                  <img
                    // src={`https://image.tmdb.org/t/p/w500/${props.dataItem.poster_path}`}
                    src={imagesURL + props.dataItem.poster_path}
                    alt={props.dataItem.original_title}
                    style={{ maxWidth: '100px', maxHeight: '150px' }}  // ajuste o tamanho conforme necessário
                  />
                </td>
              )}
            />
            {/* <Column field='poster_path' title='Filme' /> */}
            {/* <Column field='poster_path' title='Filme'>
              <img src={imagesURL + movie.poster_path} alt={movie.title} />
            </Column> */}
            <Column field='original_title' title='Nome original' />
            <Column field='vote_average' title='Nota' filter="numeric"/>
            <Column field='release_date' title='Lançamento' filter="numeric"/>
          </Grid>
        </div>
      </div>
    );
  }
}

export default GridMovies;
