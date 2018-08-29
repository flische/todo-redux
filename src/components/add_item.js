import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addItem } from '../actions/actions';


class AddItem extends Component {

    handleAddItem = async (values) => { // we first had 'arguments' in the param to check the arguments object in console
        console.log('HandleAddItem values: ', values); // we first had 'arguments' in the console.log ^

        await this.props.addItem(values);

        this.props.history.push('/'); // <--- this redirects you to home page after item has been added
        // this.props.reset( ); // <--- this will clear the input field if you would rather do that and stay on the add item page
    };

    renderInput( props ){
 // renderInput({label, input, meta: {touched, error} }){ // <--- destructuring props in the param of function!
        console.log('Render Input Props: ', props);

        return (
            <div className="row">
                <div className="col s12">
                    <label>{props.label}</label>
                    {/*<label>{label}</label>*/}
                    <input {...props.input} type="text"/>
                    <p className="red-text darken-2">{ props.meta.touched && props.meta.error}</p>
                    {/*<input {...input} type="text"/>*/}
                    {/*<p className="red-text darken-2">{ touched && error}</p>*/}
                </div>
            </div>
        )
    }

    render(){
        console.log(this.props);

        const { handleSubmit } = this.props;

        return (
            <div>
                <h1 className="center">Add Item</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/" className="btn blue darken-2">Back to List</Link>
                    </div>
                </div>
                <div className="row">
                    <form onSubmit={handleSubmit(this.handleAddItem)} className="col s12 m8 offset-m2">
                        <Field name="title" label="Title" component={this.renderInput}/>
                        <Field name="details" label="Details" component={this.renderInput}/>
                        <div className="row">
                            <div className="col s12 right-align">
                                <button className="btn blue darken-2">Add Item</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function validate(values){
    // Redux Form will look at the properties below and see if they match any of the Field name (inputs) //
    // you can do any kind of check in here that you want! to validate input //
    // for example, RegEx for validating proper email or password! //

    const { title, details } = values;
    const errors = {};

    if(!title){
        // the errors object has to match the Field name
        errors.title = 'Please give your task item a title'
    }
    if(!details){
        // the errors object has to match the Field name
        errors.details = 'Please enter details about your task item'
    }
    return errors;
}


AddItem = reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);

export default connect( null, { addItem: addItem })(AddItem);
//     connect(mapStateToProps, {action creators} )(AddItem);
//    we don't need to pass in mapStateToProps so we use 'null' instead

