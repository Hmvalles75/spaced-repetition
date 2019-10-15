import React from 'react'
import LanguageApiService from '../services/language-api-service'

export const WordsContext = React.createContext()

export class WordsProvider extends React.Component {
  state = {
    wordObj: null
  }

  async componentDidMount() {
    try {
      const wordObj = await LanguageApiService.getHead() // should this be getHead()?
      this.setState({ wordObj })
      // console.log(wordObj)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <WordsContext.Provider value={this.state}>
        {this.props.children}
      </WordsContext.Provider>
    )
  }
}
