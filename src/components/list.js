import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllListData } from '../actions/actions';

class List extends Component {

    render(){
        const listElements = this.props.list.map ( item => {
            return <li key={item._id} className="collection-item">{item.title}</li>
        });

        return (
            <ul className="collection">
                {listElements}
            </ul>
        )
    }
    componentDidMount(){
        this.props.getAllListData();
    }

}

function mapStateToProps(state){
    return {
        list: state.list.all // 'state.list' refers to reducers.js // 'list.all' refers to list_reducer.js
    }
}

export default connect( mapStateToProps, { getAllListData: getAllListData, } )(List);
// connect takes the stuff from above and adds it to props. Which we can now pass and use in componentDidMount

// export default connect( mapStateToProps, actionCreators )(List);