import { ChangeEvent, useState } from 'react'
import { FizzBuzz } from './fizzBuzz'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export enum State {
  Running = "running",
  Paused = "paused",
  Stopped = "stopped"
}

function App() {
  const [number, setNumber] = useState(0)
  const [state, setState] = useState(State.Paused)
  const [error, setError] = useState("")

  const handleNumberChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    const number = Number(value)

    if (!isNaN(number)) {
      setNumber(number)
      setError("")
    } else {
      setError("Please input a number")
    }
  }

  const startOrPauseProgramme = () => {
    if (state == State.Paused || state === State.Stopped) setState(State.Running)
    if (state == State.Running) setState(State.Paused)
  }

  const disableProgramme = () => {
    setState(State.Stopped)
    setNumber(0)
  }

  const renderButtonText = () => {
    if (state === State.Running) return "Pause"
    return "Start"
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card"> 
        <input value={number} onInput={handleNumberChanged} /> 
        <div className="button-container">
          <button onClick={() => startOrPauseProgramme()}>{renderButtonText()}</button>
          <button onClick={() => disableProgramme()}>STOP</button>
        </div>
        <FizzBuzz number={number} state={state}/>
        {error}
      </div>
    </>
  )
}

export default App
