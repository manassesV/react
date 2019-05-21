import React, { Component, Fragment } from 'react';

import axios from 'axios';

import NumberFormat from 'react-number-format';




class Produto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: {},
            loading: true,
            description: {},
        };

    }

    componentDidMount() {

        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ]).then(([item, description]) => {

            this.setState({

                data: {
                    ...item.data,
                    description: description.data.plain_text,
                },
                loading: false
            });

        });


    }

    renderContent() {
        const { id, data } = this.state;

        return (
            <Fragment>
                <div className="mdl-grid  mdl-shadow--2dp">
                     
                    <div className="mdl-cell mdl-cell--6-col">
                        <img className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone" src={data.pictures[0].url} />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <div className="mdl-cell mdl-cell--12-col">
                            <div className="mdl-card__supporting-text">
                                <p>{data.id}</p>
                                <p>{data.sold_quantity}</p>
                            </div>
                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text " id="fonts">{data.title}</h2>
                            </div>
                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text">
                                    <NumberFormat value={data.price} displayType={'text'}
                                        thousandSeparator={true} prefix={'R$ '}
                                        renderText={value => <div>{value}</div>} />

                                </h2>
                            </div>
                            <div className="mdl-card__actions mdl-card--border ">
                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                                    COMPRAR
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <div className="mdl-card__supporting-text">
                            <p id="just">{data.description}</p>
                        </div>
                    </div>

                    <div className="mdl-card__menu">
                    </div>
                </div>
            </Fragment>
        );
    }

    render() {
        const { loading } = this.state;
        return loading ?
            <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div> : this.renderContent()
    }
}

export default Produto 