import "../styles/Card.css";

import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    const { card } = this.props;

    return <div className="Card">{card.text}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  card: state.cardsById[ownProps.cardId]
});

export default connect(mapStateToProps)(Card);