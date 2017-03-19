import React from 'react';

//const App = () => <h1>Hello</h1>;

class App extends React.Component {
    constructor() {
        super();   // call 'super()' so that we can use 'this': Syntax error: 'this' is not allowed before super()
        this.state = {
            txt: "This is the state txt",
            num: 0
        };
    }

    update(event) {  // not in the spec
        this.setState({txt: event.target.value});
    }

    render() {
        let text = this.props.txt, anotherText = this.props.anotherTxt, num = this.props.num;

        return (
            <div>
                <input type="text" onChange={this.update.bind(this)} />
                <h1>Hello Jake</h1>
                <b>{text}</b>
                <br />
                <b>{anotherText}</b>
                <br />
                <b>Number is {num}</b>
                <br />
                <h2>{this.state.txt}</h2>
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
