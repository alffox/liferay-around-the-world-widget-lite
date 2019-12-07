import React from "react";
import Moment from "react-moment";

import AtwIcon from "./AtwIcon.es";

class AtwTimeDate extends React.Component {
  render() {
    return (
      <div className="timedate">
        <AtwIcon classes="lexicon-icon inline-item" iconName="time" />
        <span className="time px-1 mr-3">{this.props.time}</span>
        <AtwIcon classes="lexicon-icon inline-item" iconName="calendar" />
        <span className="date px-1">
          <Moment format="dddd, MMMM DD, GGGG">{this.props.date}</Moment>
        </span>
      </div>
    );
  }
}

export default AtwTimeDate;
