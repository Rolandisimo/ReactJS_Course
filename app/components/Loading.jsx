import React, { PropTypes } from 'react';
import styles from '../styles';

const Loading = React.createClass({
    propTypes: {
        text: PropTypes.string,
        speed: PropTypes.number
    },
    getDefaultProps() {
        return {
            text: 'Loading',
            speed: 300
        };
    },
    getInitialState() {
        this.originalText = this.props.text;
        return {
            text: this.originalText
        };
    },
    componentDidMount() {
        let stopper = this.originalText + '...';
        this.interval = setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.originalText
                });
            } else {
                this.setState({
                    text: this.state.text + '.'
                });
            }
        }, [this.props.speed]);
    },
    componentWillUnmount() {
        clearInterval(this.interval);
    },
    render () {
        return (
            <div style={styles.container}>
                <div style={styles.content}>
                    {this.state.text}
                </div>
            </div>
        );
    }
});

export default Loading
