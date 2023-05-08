
interface IPropsAlternatives {
    alternative: string[]
}

function Alternatives(props : IPropsAlternatives) {
    return (
        <div className="score">
            <div>Alternatives</div>
        </div>
    )
}

export default Alternatives