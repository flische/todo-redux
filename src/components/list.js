import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllListData } from '../actions/actions';

class List extends Component {
    componentDidMount(){
        this.props.getAllListData();
    }

    render(){
        const listElements = this.props.list.map ( item => {
            return (
                <li key={item._id}
                    className="collection-item">
                    {/*<Link to={`/item-details/${props.id}`}>*/}
                        {/*{props.complete ?*/}
                            {/*<span className="light-green-text text-darken-3 grey lighten-5">*/}
                        {/*{props.title}*/}
                                {/*<i className="right small material-icons light-green-text text-darken-1 grey lighten-5">turned_in</i>*/}
                    {/*</span>*/}
                            {/*:*/}
                            {/*<span className="orange-text text-darken-1 grey lighten-5">*/}
                        {/*{props.title}*/}
                                {/*<i className="right small material-icons orange-text text-darken-1 grey lighten-5">turned_in_not</i>*/}
                    {/*</span>*/}
                        {/*}*/}
                    {/*</Link>*/}
                >{item.title}</li>
            )
        });

        return (
            <div>
                <h1 className="center">Redux To Do List</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/add-item" className="btn blue darken-2">Add-Item</Link>
                    </div>
                </div>
                <ul className="collection with-header">
                    <li className="collection-header center grey lighten-5 teal-text">
                        <h5 className="grey lighten-5">To Do Tasks</h5>
                    </li>
                    {listElements}
                </ul>
            </div>
        );
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