import React from 'react';

//const App = () => <h1>Hello</h1>;

class App extends React.Component {
    render() {
        let text = this.props.txt, anotherText = this.props.anotherTxt, num = this.props.num;

        return (
            <div>
                <h1>Hello Jake</h1>
                <b>{text}</b>
                <br />
                <b>{anotherText}</b>
                <br />
                <b>Number is {num}</b>
            </div>
        );
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    anotherTxt: React.PropTypes.string,
    num: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "This is the default text",
    anotherTxt: "This is another default text",
    num: 10
}
export default App;
