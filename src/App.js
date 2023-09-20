import Board from "./Board"
import Button from "./Button"
import { useState } from "react"
import './App.css'
import logo from './assets/logo.png'

function random(n) {
    return Math.ceil(Math.random() * n)
}
function App() {
    // const [mynum, setMyNum] = useState(1);
    // const [othernum, setOtherNum] = useState(1);
    // //주사위 합
    // const [mysum, setMySum] = useState(0);
    // const [othersum, setOtherSum] = useState(0);
    //주사위 기록
    const [myhistory, setMyHistory] = useState([])
    const [otherhistory, setOtherHistory] = useState([])


    const handleRollClick = () => {
        const nextMyNum = random(6)
        const nextOtherNum = random(6)
        // setMyNum(nextMyNum)
        // setOtherNum(nextOtherNum)
        // setMySum(mysum + nextMyNum)
        // setOtherSum(othersum + nextOtherNum)
        setMyHistory([...myhistory, nextMyNum])
        setOtherHistory([...otherhistory, nextOtherNum])
    }

    const handleResetClick = () => {
        // setMyNum(1)
        // setOtherNum(1)
        // setMySum(0)
        // setOtherSum(0)
        setMyHistory([])
        setOtherHistory([])
    }

    return (
        <div className="App">
            <img class="App-logo" src={logo} alt="주사위게임 로고" />
            <h1 class="App-title">주사위게임</h1>
            <div className="ButtonContainer">
                <Button classNamess="App-button" color="blue" my_click={handleRollClick}>던지기</Button>
                <Button classNamess="App-button" color="red" my_click={handleResetClick}>처음부터</Button>
            </div>
            <div className="BoardContainer">
                <Board className="Board" color="blue" history={myhistory}>나</Board>
                <Board className="Board" color="red" history={otherhistory}>상대방</Board>
            </div>
        </div>
    )
}

export default App