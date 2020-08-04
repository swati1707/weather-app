import React from 'react';

const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input className="form-control" type="text" name="city" placeholder="City" autoComplete="off" />
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" type="text" name="country" placeholder="Country" autoComplete="off" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please enter City and Country !!
        </div>
    )
}

export default Form;