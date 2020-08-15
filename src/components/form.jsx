import React from 'react';

const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadWeather}>
                    <div>
                        <input className="form-control" type="text" name="city" placeholder="City" autoComplete="off" />
                    </div>
                    <div>
                        <input className="form-control" type="text" name="country" placeholder="Country" autoComplete="off" />
                    </div>
                    <div>
                        <button className="btn btn-warning">Get weather</button>
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