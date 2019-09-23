import React from 'react';

class charapterList extends React.Component {
  
  render() {
    const { charapters } = this.props
    return (
      <ol className="charapterList">
        {charapters.map(charapter => {
          return (
            <li className="charapter" key={charapter.id}>

              <div className="card">
                <div className="card__img">
                  <img src={charapter.image} alt={`Imagen de${charapter.name}`} />
                </div>
                <h2 className="card__name">{charapter.name}</h2>
                <p className="card__specie">{charapter.species}</p>
              </div>

            </li>
          );
        })}

      </ol>


    );
  }
}

export default charapterList;
