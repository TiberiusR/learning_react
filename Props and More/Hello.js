class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.bangs);
        return (
            <div>
                <h1>Hello there {this.props.to}{bangs}</h1>
                <h1>From {this.props.from}</h1>
                <img src={this.props.img} />
            </div>
        );
    }
}