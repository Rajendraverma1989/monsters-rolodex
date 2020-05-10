import React from 'react';
import './App.css';
import json from './JSON/users.json';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box';

class App extends React.Component{
    constructor() {
        super();
        this.state={
            monsters : [],
            searchFields: ''
        }
}
    componentDidMount() {
    
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(reponse => reponse.json())
            .then(users => this.setState({monsters: users}));
    }
    handleChange = (e) => {
        this.setState({ searchFields:e.target.value })
    }
    
    render() {
        const {monsters, searchFields} = this.state;
        const filterMonster = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchFields.toLocaleLowerCase()));
        return ( 
            <div className="App">
                <h1>MOSTERS ROLODEX</h1>
                <SearchBox 
                placeholder = "serch monsters"
                handleChange = {this.handleChange}
                />
                <CardList monsters={filterMonster} />            
            </div>
        );
    }
}

export default App;
