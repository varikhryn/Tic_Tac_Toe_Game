import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // square: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      square: Array(9).fill(null),
      count: 0,
      winX: 0,
      winO: 0,
      initial1: 'X',
      initial2: 'O',
    }

    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]
  }

  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? this.state.initial1 : this.state.initial2;
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (this.state.square[line[0]] === s
        && this.state.square[line[1]] === s
        && this.state.square[line[2]] === s) {
        alert(s + ' - выиграл!');
        if (s === 'X') {
          this.setState({
            winX: this.state.winX + 1,
          });
        } else if (s === 'O') {
          this.setState({
            winO: this.state.winO + 1,
          })
        }
        setTimeout(() => {
          this.setState({ square: Array(9).fill(null) });
          this.setState({ count: 0 });
        }, 1000);
      } else if (this.state.count === 8) {
        setTimeout(() => {
          this.setState({ square: Array(9).fill(null) });
          this.setState({ count: 0 });
        }, 1000);
        alert('Ничья!');
      }
    }
  }

  newGame = (event) => {
    this.setState({ square: Array(9).fill(null) });
    this.setState({ count: 0 });
  }

  newUser = (event) => {
    this.setState({ square: Array(9).fill(null) });
    this.setState({ count: 0 });
    this.setState({
      winO: 0,
      winX: 0,
    })
  }
  initialX = () => {
    this.setState({
      square: Array(9).fill(null),
      count: 0,
      initial1: "X",
      initial2: "O",
    });
  }
  initialO = () => {
    this.setState({
      square: Array(9).fill(null),
      count: 0,
      initial1: "O",
      initial2: "X",
    });
  }

  clickHandler = (event) => {
    let data = event.target.getAttribute('data');

    let currentSquare = this.state.square;
    if (currentSquare[data] === null) {
      currentSquare[data] = (this.state.count % 2 === 0) ? this.state.initial1 : this.state.initial2;
      this.setState({ count: this.state.count + 1 });
      this.setState({ square: currentSquare });
    } else {
      alert('Выберете следующие поле');
    }

    this.isWinner();
  }



  render() {
    return (
      <div className='game'>
        <div className='tic-tac-toe'>
          <div className='ttt-grid' onClick={this.clickHandler} data='0'>{this.state.square[0]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='1'>{this.state.square[1]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='2'>{this.state.square[2]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='3'>{this.state.square[3]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='4'>{this.state.square[4]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='5'>{this.state.square[5]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='6'>{this.state.square[6]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='7'>{this.state.square[7]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='8'>{this.state.square[8]}</div>
        </div>

        <div className="btn-wrapper">

          <button onClick={this.initialX}>начать c "X"</button>
          <button onClick={this.initialO}>начать c "O"</button>

          <h2>Счёт</h2>
          <div className='count_win'>
            <div className="count_win_itm">
              <p>{this.state.winX}</p>
            </div>

            <div className="count_win_itm">
              <p>{this.state.winO}</p>
            </div>
          </div>
          <button onClick={this.newUser}>Обнулить счёт</button>
          <button onClick={this.newGame}>начать новую игру</button>
        </div>
      </div>
    )
  }
}

export default App;
