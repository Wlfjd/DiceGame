import Dice from "./Dice"
import './Board.css'


function Board({ children, color, history, className = '' }) {
    const num = history[history.length - 1] || 1;
    const sum = history.reduce((a, b) => a + b, 0);
    const classNames = className
    return (
        <div className={classNames}>
            <h2>{children}</h2>
            <Dice color={color} num={num} />
            <h2>총점</h2>
            <p className="result">{sum}</p>
            <h2>기록</h2>
            <p className="result">{history.join(', ')}</p>
        </div >
    )
}

export default Board