import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    const cardClass = `card ${goat.color}`;

    return (
      <div className="Goat col-3">
        <div className={cardClass}>
          <img className="card-img-top" src={goat.imageUrl} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.favPose}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
