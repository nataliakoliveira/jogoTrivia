import React from 'react';
import { connect } from 'react-redux';

class Perguntas extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Perguntas aqui
        </h1>
        <select>
          <option>categoria</option>
        </select>
      </div>
    );
  }
}

export default connect()(Perguntas);
