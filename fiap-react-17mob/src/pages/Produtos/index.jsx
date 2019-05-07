import React, {Component} from 'react';


class Produto extends Component{
    constructor(props){
        super(props);

        console.log(this.props.match.params.id);

    }
    render(){
        return(
            <div>Produto</div>
        )
    }
}

export default Produto