import React, { Component } from 'react';



class Pm_number1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      sentence: "",
      word: '',
      count: 0,
      counts: 0,
    }
    
  }

  handleCount = (e) => {
    let sen = this.state.sentence
    let arr = this.state.array
    let sSplit = sen.split(" ");
    this.setState({ counts: sSplit.length });
    sSplit.forEach(element => {
    this.state.array.push(element)
    });
  
   let counter = 0; 
    arr.forEach(i => {
      if (i === this.state.word) {
        counter += 1;
      }
      this.setState({ count: counter })
    });
  }
  render() {
    const { sentence, word, count, counts } = this.state;
    return (
      
      <center><div class="jumbotron">
        <h1 id='header'>-Word Counter-</h1><br/>
        <div className="">
          <label id="input">Input Sentence:</label><br/>
          <input id="input1" class="form-control" name="setence" onChange={e => this.setState({ sentence: e.target.value })}></input>
        </div>
        <br />
        <label id="input2">Locate Word:</label>
        <input id="input2" class="form-control" name="word" onChange={e => this.setState({ word: e.target.value })}></input><br/><br/>
        <button class="btn btn-primary" onClick={e => this.handleCount(e)}>Count</button><br/><br/>
        <h3>{sentence} : {counts}</h3>
        <h3>{word} : {count}</h3><br></br>

      </div></center>

    )
  }
}

export default Pm_number1;