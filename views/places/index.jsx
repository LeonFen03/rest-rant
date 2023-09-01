const React = require('react')
<<<<<<< HEAD
const Def = require('../default')
=======
const Def = require('./default')
>>>>>>> 834a728964c18fec0ea03891f3813e93c6e001fc

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
<<<<<<< HEAD
        <div className="col-sm-6">
          <h2>
            <a href={`/places/${place.id}`} >
              {place.name}
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
=======
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
>>>>>>> 834a728964c18fec0ea03891f3813e93c6e001fc
        </div>
      )
    })
    return (
      <Def>
          <main>
<<<<<<< HEAD
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Def>
    )
  }

module.exports = index
=======
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  

module.exports = index;
>>>>>>> 834a728964c18fec0ea03891f3813e93c6e001fc
