import React from 'react'
export default class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchInput:''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }
  handleSearchChange(event){
    this.setState({searchInput: event.target.value})
    
  }
  handleSearchSubmit(event){
    event.preventDefault()
    console.log(this.state)
    this.setState({searchInput:''})
  }
  
  render(){
    return(
      <div className='search-bar ui segment'>
        <form  className= 'ui form' onSubmit={this.handleSearchSubmit}>
          <div className='field'>
            <label>SearchBar</label>
              <input 
              type='text'
              name='searchInput'
              value = {this.state.searchInput}
              onChange = {this.handleSearchChange}
              />
            </div>
          <button type = 'submit'>Submit</button>
        </form>
      </div>
    )
  }
}
