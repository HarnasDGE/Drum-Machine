import React from 'react';
import { mapStateToProps } from '../containers/AppContainer.js';
import { connect } from 'react-redux';

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="info-container">{this.props.info}</div>
        );
        
    }
}

export default connect(mapStateToProps, null)(Info);