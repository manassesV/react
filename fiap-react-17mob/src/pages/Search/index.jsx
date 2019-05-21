import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Search extends Component {
    constructor() {
        super();
        this.onSearch = this.onSearch.bind(this);

        this.state = {
            datas: []
        }
    }

    onSearch(event) {
        const value = event.currentTarget.value;

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                this.setState({
                     datas: data.results
                });
   

            });
    }

    renderItem(item){
        return(
          
        <tr className="trtable">
            <Link
            to={`/produto/${item.id}`}
            className="texttable"
            >
            <td  key={item.id} className="mdl-cell--12-col">
               <span>{item.id}</span>

               <span >{item.title}</span>
              
            </td>
            </Link>
        </tr>

        )
    }

    
    render() {
        return (
     <Fragment>
        <div className="mdl-grid">
             <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                    <div className="mdl-layout-spacer"></div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                        mdl-textfield--floating-label">
                        <label className="mdl-button mdl-js-button mdl-button--icon"
                            >
                            <i id="blue" className="material-icons">search</i>
                        </label>
                        <input id="search" className="mdl-textfield__input " type="text" name="sample"
                                onChange={this.onSearch}/>
                    </div>
                  </div>
                </header>
             <table className="mdl-cell--12-col mdl-cell--4-col-phone  mdl-shadow--2dp">
                <tbody className="mdl-cell--12-col">

                    { this.state.datas.map(this.renderItem) } 
                </tbody>
            </table>
     </div>
</Fragment>
        
        );
    }
}

export default Search;