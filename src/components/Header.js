import React from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { name, score, email } = this.props;
    console.log(score);
    const token = md5(email).toString();
    return (
      <header>
        <img
          alt="img"
          src={ `https://www.gravatar.com/avatar/${token}` }
          data-testid="header-profile-picture"
        />
        <p className="pName" data-testid="header-player-name">{name}</p>
        <p>
          <span>Pontos:</span>
          <span data-testid="header-score">{ score }</span>

        </p>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  name: state.player.name,
  email: state.player.email,
});

export default connect(mapStateToProps)(Header);
