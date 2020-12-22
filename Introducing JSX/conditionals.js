function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? 'Congrats' : 'Try Again!'}</p>
                {
                    num === 7 &&
                    <img src='https://preview.redd.it/48eva7n74l661.png?width=640&crop=smart&auto=webp&s=2b01ce3ea3eddd9991c87f3617023d0e9f40be6e' />
                }
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));