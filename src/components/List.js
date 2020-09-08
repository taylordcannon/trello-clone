import "../styles/List.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./Card";

class List extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className="List">
        <div className="List-Title" onClick={this.toggleEditingTitle}>
          {list.title}
        </div>

        {list.cards &&
          list.cards.map((cardId, index) => (
            <Card
              key={cardId}
              cardId={cardId}
              index={index}
              listId={list._id}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state.listsById[ownProps.listId]
});

export default connect(mapStateToProps)(List);