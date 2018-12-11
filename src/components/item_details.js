import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllListData, toggleComplete, deleteItem } from '../actions/actions';
import axios from 'axios';
import config from '../config';


class ItemDetails extends Component{

    // state = {
    //     itemDetails: {}
    // };

    async componentDidMount(){
        
        const { item_id } = this.props.match.params;
        const { BASE_URL, API_KEY } = config.api;

        const response = await axios.get(`${BASE_URL}/todos/${item_id + API_KEY}`))
    }


    handleToggleCompleteItem = async (id) => {
        await this.props.toggleComplete(id);
    }

    handleDeleteItem = async (id) => {
        await this.props.deleteItem(id);

        this.props.history.push('/');
    }

    render(){
        const { todo } = this.props.match.params;
        console.log('this.props.match.params',this.props.match.params);
        console.log('props before todo', this.props);
        console.log('props todo:', todo);

        if(!todo){
            return <h1 className="grey-text">Loading...</h1>;
        }

            // return (
            //     <li key={item._id}
            //         id={item._id}
            //         className="collection-item grey lighten-5">
            //         <Link to={`/item-details/${item._id}`}>
            //             {item.complete ?
            //                 <span className="light-green-text text-darken-3 grey lighten-5">
            //                     {item.details}
            //                 <i className="right small material-icons light-green-text text-darken-1 grey lighten-5">turned_in</i>
            //                 </span>
            //             :
            //                 <span className="orange-text text-darken-1 grey lighten-5">
            //                     {item.details}
            //                     <i className="right small material-icons orange-text text-darken-1 grey lighten-5">turned_in_not</i>
            //                 </span>
            //             }
            //         </Link>
            //     </li>
            // );
    

        return (
            <div className="">
                <h1 className="center indigo-text darken-3">Item Details</h1><br/>
                <div className="row card-panel indigo lighten-5">
                    <h4 className="center indigo lighten-5"><b className="indigo lighten-5 indigo-text">Title:</b> {item.title}</h4><br/>
                    <h5 className="indigo lighten-5"><b className="indigo lighten-5 indigo-text">Details:</b> {item.details}</h5><br/>
                </div>
                <div className="row">
                    <div className="col s4 center">
                        {item.complete ?
                            <button
                                className="btn orange darken-2"
                                onClick={this.handleToggleCompleteItem.bind(this)}
                                >Mark as Incomplete
                            </button>
                            :
                            <button
                                className="btn blue darken-3"
                                onClick={this.handleToggleCompleteItem.bind(this)}
                                >Complete Task
                            </button>
                        }
                    </div>
                    <div className="col s4 center">
                        <button
                            onClick={this.handleDeleteItem.bind(this)}
                            className="btn red darken-2">Delete Task
                        </button>
                    </div>
                    <div className="col s4 center">
                        <Link to="/" className="btn purple darken-2">Back to List</Link>
                    </div>
                </div>
                {item.complete ?
                    <h5 className="row card-panel green lighten-4"><b className="green lighten-4 indigo-text">Status: </b>
                        <span className="green lighten-4 indigo-text">Item Complete!</span>
                    </h5>
                    :
                    <h5 className="row card-panel amber lighten-4"><b className="amber lighten-4 red-text">Status: </b>
                        <span className="amber lighten-4 red-text">Item is not yet complete</span>
                    </h5>
                }
            </div>
            );
    }
}

function mapStateToProps(state){
    return {
        list: state.list.all, // 'state.list' refers to reducers.js // 'list.all' refers to list_reducer.js
        todo: state.todo.item
    }
}

export default connect( mapStateToProps, { getAllListData: getAllListData, toggleComplete: toggleComplete, deleteItem: deleteItem } )(ItemDetails);