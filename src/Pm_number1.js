import React, { Component } from 'react';



class Pm_number1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words : [],
      word : "",
      sentence : "",
      counts : 0,
      count : 0
    }
  }

  handleCount = (e) => {
    // this.setState({sentence:e.target.value});
    const {sentence, words , word} = this.state;
    e.preventDefault();
    words.push(sentence);
    var sentences = words[Math.floor(Math.random()*words.length)];
    var splitSentence = sentences.split(" ");
    this.setState({
      counts : splitSentence.length
    });
    var counter = 0;
    for(var i = 0; i < splitSentence.length; i++ ){
      if (splitSentence[i] === word) {
        counter += 1;
      }
     
    }
    this.setState({count : counter})
  
  }
  render() {
    const { sentence, word, count, counts } = this.state;
    return (
      
      <center><div class="jumbotron">
        <h1 id='header'>-Word Counter-</h1><br/>
        <div className="">
          <label id="input">Input Sentence:</label><br/>
          <input id="input1" class="form-control" name="setence" value={this.state.sentence} onChange={e => this.setState({ sentence: e.target.value })}></input>
        </div>
        <br />
        <label id="input2">Locate Word:</label>
        <input id="input2" class="form-control" name="word" onChange={e => this.setState({ word: e.target.value })}></input><br/><br/>
        <button class="btn btn-primary"id="btn"disabled={!this.state.sentence} onClick={e => this.handleCount(e)}>Count</button><br/><br/>
        <h3>{sentence} : {counts}</h3>
        <h3>{word} : {count}</h3><br></br>

      </div></center>

    )
  }
}

export default Pm_number1;