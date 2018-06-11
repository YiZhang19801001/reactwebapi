import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//component import
import ResultsComponent from './components/results/results_component';
import SearchComponent from './components/search/search_component';
//service
import * as PackageService from './services/package_service';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      results:[]
    }
  }

  onSearch(search_term){
    let app=this;
    PackageService.searchPackages(
      search_term,
      function(response){
        app.setState({results:response.data});
        console.log(response.data);
      }
    );
  }

  render() {

    return (
      <div>
        
        <SearchComponent onSearch={this.onSearch.bind(this)} />
        <ResultsComponent packs={this.state.results}/>
      </div>
    );
  }
}

export default App;
