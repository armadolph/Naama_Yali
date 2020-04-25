class Wall extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user_update: ''
        };

        this.updateChange = this.updateChange.bind(this);
        this.updateSubmit = this.updateSubmit.bind(this);
    }
    
    updateChange(e){
        this.setState({user_update: e.target.value});
    }

    updateSubmit(e){
        e.prevetDefault();
        var user_update = this.state.user_update.trim();
        if(!user_update){
            return;
        }
        else {
            this.props.onUpdateSubmit ({user_update: user_update});
            this.setState({user_upadate: ''});
        }
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this.refs.updateInput).focus
    }
}