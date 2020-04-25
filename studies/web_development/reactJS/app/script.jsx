// var MyComponent = React.createClass({
//     render : function(){
//         return(
//             <h2>Hallo world!</h2>
//         );
//     }
// });

// ReactDOM.render(
//     <MyComponent/>, document.getElementById("content")
// );
import React from 'react';

var styles = {color: 'red'}
var styles2 = {color: 'blue'}

class Header extends React.Component {
    render() {
        return (
            <h2>This is the Header Component: {this.props.name}</h2>
        );
    }
}


class Footer extends React.Component {
    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);
    
        // Set the state directly. Use props if necessary.
        this.state = {
          user: 'yali',
          pet: 'Luna',
          style : {
              height: '200px',
              width: '300px',
              background: 'black'
          }
        }
    }

    render() {
        setTimeout(() => {this.setState( {user: 'Namki', pet: 'Lunonet'})}, 2000)

        return (

            <div style={this.state.style}>
                <h1>User is : {this.state.user}. His pet is: {this.state.pet}</h1>
                <h2>This is the Footer Component</h2>
            </div>
            
        );
    }
}

class Bulb extends React.Component {
    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);
    
        // Set the state directly. Use props if necessary.
        this.state = {
            status: true
        }

        this.switch = this.switch.bind(this)
    }

    switch() {
        console.log('Button has been clicked')
        this.setState({
            status : !this.state.status
        });
    } 

    render() {
        var string_to_print = this.state.status ? 'I love Dark chocolate' : 'I love White chocolate';
        return (
            <div>
                <p>{string_to_print}</p>
                <button onClick={this.switch}>Click Me</button>
            </div>
        )
    }
}

class Hello extends React.Component {
    render() {
        return (
            <div>
                <div style={styles}>
                    <h1>First Excersizes</h1>
                    <Header name="Namkicookie"/>
                    <Header name="Lunonet"/>
                    <h1 style={styles2}>Hello World!</h1>
                    <h3>Test</h3>
                    <Footer/>
                </div>
                <div>
                    <h1>Second Excersizes</h1>
                    <Bulb/>
                </div>
            </div>
            );
        }
}

// var createReactClass = require('create-react-class');
var Greeting = React.createClass({
  render: function() {
    return <h1>Hello</h1>;
  }
});

ReactDOM.render(<Hello />, document.getElementById('mydiv'));