// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchText: ''}

  onChangeText = event => {
    this.setState({
      searchText: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchText} = this.state
    const updatedList = destinationsList.filter(each => {
      const nameToLowerCase = each.name.toLowerCase()
      return nameToLowerCase.includes(searchText.toLowerCase())
    })
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="img-container">
          <input
            value={searchText}
            onChange={this.onChangeText}
            type="search"
            placeholder="Search"
            className="input-search"
          />

          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img-search"
          />
        </div>

        <ul className="list-container">
          {updatedList.map(each => (
            <DestinationItem destinationsList={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
