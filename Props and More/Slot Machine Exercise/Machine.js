class Machine extends React.Component {
    render() {
        const slots = [1, 2, 3]
        const s1 = slots[Math.floor(Math.random() * slots.length)];
        const s2 = slots[Math.floor(Math.random() * slots.length)];
        const s3 = slots[Math.floor(Math.random() * slots.length)];
        let msg;
        if (s1 === s2 && s1 === s3 && s2 === s3) {
            msg = "You win!"
        } else {
            msg = "Try again"
        }
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                {msg}
            </div>
        )
    }
}