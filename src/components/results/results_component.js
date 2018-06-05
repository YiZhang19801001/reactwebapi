// class_component.js
import React from 'react';
import './styles.css';

// lifecycle methods
// more complex logic
// contain other components

class ResultsComponent extends React.Component {

    render() {
        console.log(this.props.packs.length);
        return (
            <div className="my-result-style">
                {this.props.packs.length} packages been found
                {this.renderMovies()}
            </div>
        );
    }

    renderMovies(){
        let movie_divs = this.props.packs.map(
            function(pack){
                return (
                    <div key={pack.id} className="movie">
                    <h2>{pack.packageName}</h2>
                    <div>{pack.location}</div>
                    <br/>
                    <div>{pack.price}</div>
                    </div>
                );
            }
        )

        return movie_divs;
    }
}

export default ResultsComponent;