import React from "react";
import { connect } from "react-redux";

class ReduxCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    increment = () => {
        this.props.dispatch({type: 'INCREMENT'})
    }

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'})
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <p>{this.props.count}</p>
                <button onClick={this.increment}>+</button>
            </div>

        )
    }



}
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(ReduxCounter);