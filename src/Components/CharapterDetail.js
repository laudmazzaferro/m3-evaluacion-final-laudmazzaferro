import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharapterDetail = props => {
    const { routerProps, charapters } = this.props;
    const chapId = parseInt(routerProps.match.params.chapId);
    const charapter = charapters.filter(item => item.id === chapId);
    console.log(charapter[0])

    if (charapter[0]){
      const {name ,image, status, species, origin, episodes} = charapter[0];
      return (
        <React.Fragment>
            <div>
              <img src={image} alt={name}/>
            </div>
            <h3>{name}</h3>
            <p>{`Status:${status}`}</p>
            <p>Species:{species}</p>
            <p>Origin:{origin}</p>
            <p>Episodes:{episodes}</p>
          <Link to="/" className="app__back">Volver al listado</Link>
        </React.Fragment>
        
      );
    }
}

CharapterDetail.propTypes = {
  charapters: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps:PropTypes.object.isRequired,
};

export default CharapterDetail;