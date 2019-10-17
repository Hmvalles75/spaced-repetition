import React from 'react'
// import LanguageApiService from '../services/language-api-service'

export const WordContext = React.createContext()

export class WordProvider extends React.Component {
  state = {
    wordObj: null,
    guessRes: null
  }

  setWordObj = wordObj => {
    // get next word
    // console.log(wordObj)
    this.setState({ wordObj })
    // console.log('context setWordObj():', this.state.wordObj)
  }

  setGuessRes = guessRes => {
    this.setState({ guessRes })
    // console.log('context setGuessResp():', this.state.wordObj)
  }

  // async componentDidMount() {
  //   try {
  //     const wordObj = await LanguageApiService.getHead() // should this be getHead()?
  //     this.setState({ wordObj })
  //     console.log('comp did mount context:', wordObj)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  render() {
    const value = {
      wordObj: this.state.wordObj,
      setWordObj: this.setWordObj,
      guessRes: this.state.guessRes,
      setGuessRes: this.setGuessRes
    }
    // console.log('context:',this.state)
    return (
      <WordContext.Provider value={value}>
        {this.props.children}
      </WordContext.Provider>
    )
  }
}

export const WordContextConsumer = WordContext.Consumer
