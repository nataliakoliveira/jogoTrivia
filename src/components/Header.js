import React from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { name, score, email } = this.props;
    const token = md5(email).toString();
    return (
      <header>
        <img
          alt="img"
          src={ `https://www.gravatar.com/avatar/${token}` }
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">
          Pontos:
          { score }
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
  score: state.user.score,
  name: state.user.name,
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
