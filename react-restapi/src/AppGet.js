import React from 'react';
import axios from 'axios'


class App extends React.Component {
  state={
    persons:[]
  }
 

componentDidMount(){

  axios.get(`https://py-api.herokuapp.com/users`)
  .then(res=>{
    const persons=res.data
    this.setState({persons})
  })
  
}


  render() {
    return (
      <ul>
        {this.state.persons.map(person=><li key={person.id}>{person.first_name} {person.email}</li>)}
      </ul>
    )
  }  
}

export default App;
