class RefComponent extends React.Component {
    constructor(props) {
        super(props);
        this.display = this.display.bind(this)
        // this.handleChange = this.handleChange.bind(this)
        // this.state = {inputdemo: ""}

    }

    display() {
        // var name = this.state.inputdemo;
        var name = this.inputdemo.value;
        document.getElementById('dispName').innerHTML = name
    }

    // handleChange( input ) {
    //     this.setState({inputdemo: input.target.value})

    // }

    render() {
        return(
        <div>
            <h2> Name: <input type="text" ref= {input => this.inputdemo = input} /></h2>
            {/* <h2> Name: <input type="text" onChange = {this.handleChange} /></h2> */}
            <br/>
            <button onClick={this.display}> Click </button>
            <h1> Hi... <span id="dispName"></span></h1>
            </div>
        )
    }
}

ReactDOM.render(<RefComponent />, document.getElementById('mydiv'));