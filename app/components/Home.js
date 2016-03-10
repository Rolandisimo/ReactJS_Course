var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link,
    transparentBg = require('../styles').transparentBg;

function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Github Battle</h1>
        <p className="lead">The fancy battle without weapons</p>

        <Link to="/playerOne">
            <button className="btn btn-lg btn-success">Get Started</button>
        </Link>
    </div>
);
}

module.exports = Home;
