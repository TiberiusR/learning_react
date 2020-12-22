class Machine extends React.Component {
    render() {
        const slots = [1, 2, 3]
        const s1 = slots[Math.floor(Math.random() * slots.length)];
        const s2 = slots[Math.floor(Math.random() * slots.length)];
        const s3 = slots[Math.floor(Math.random() * slots.length)];
        const winner = s1 === s2 && s2 === s3;
        return (
            <div className="Machine">
                <p style={{fontSize:'50px'}}>
                    {s1} {s2} {s3}
                </p>
                <p className={winner ? 'win' : 'lose'}>
                    {winner ? "You Win!" : "Try Again"}
                </p>
            </div>
        )
    }
}