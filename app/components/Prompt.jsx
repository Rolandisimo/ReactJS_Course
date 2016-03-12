import React, { PropTypes } from 'react';
import {transparentBg} from '../styles';

const Prompt = (props) => {
    return (
        <div className="row">
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h1>{props.header}</h1>
                <div className="col-sm-12">
                    <form onSubmit={props.onSubmitUser}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                onChange={props.onUpdateUser}
                                value={props.username }
                                placeholder="Enter Github username..." />
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button
                                type="submit"
                                className="btn btn-block btn-success"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = Prompt;
