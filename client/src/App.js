import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        file : {}
    }

    handleChange = e =>{
        console.log('DEBUG e.target.files[0]', e.target.files[0]);
        this.setState({
            file: e.target.files[0]
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        let fd = new FormData()
        fd.append('photo', this.state.file)
        axios.post('http://localhost:3000/photo/add', fd)
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }
  render() {
    return (
      <div className="App">
        <h2>Herramienta de carga de archivos</h2>
          <form onSubmit={ this.handleSubmit}>
              <input type="file" onChange={this.handleChange}/>
              <br/>
              <button type="submit">Guardar la foto maldita</button>
          </form>
          <button onClick={()=>console.log(this.state)}>Revisar URL</button>
      </div>
    );
  }
}

export default App;
