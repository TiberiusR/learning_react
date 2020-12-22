class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to='Ringo' 
                    from='Paul' 
                    bangs={4}
                    img="https://preview.redd.it/48eva7n74l661.png?width=640&crop=smart&auto=webp&s=2b01ce3ea3eddd9991c87f3617023d0e9f40be6e"
                />
                <Hello
                    to='Cher'
                    from='Sonny'
                    bangs={5}    
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));