import "../styles/Board.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import List from "./List";

class Board extends Component {
  render() {
    const { board } = this.props;

    return (
      <div className="Board">
        {board.lists.map((listId, index) => {
          return <List listId={listId} key={listId} index={index} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({ board: state.board });

export default connect(mapStateToProps)(Board);