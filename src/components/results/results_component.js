// class_component.js
import React from 'react';
import './styles.css';
import PackComponent from '../pack/pack_component';


// lifecycle methods
// more complex logic
// contain other components

class ResultsComponent extends React.Component {

    constructor(props){
        super(props);
      }

    render() {
        console.log(this.props.packs.length);
        return (
            <div className="my-result-style">
                <div className="result-text">{this.props.packs.length} packages been found</div>
                {this.renderPacks()}
            </div>
        );
    }

    renderPacks(){
        let pack_divs = this.props.packs.map(
            function(pack){
                return (
                    <PackComponent pack={pack}/>
                );
            }
        )

        return pack_divs;
    }
}

export default ResultsComponent;