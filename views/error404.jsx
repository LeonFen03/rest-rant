const React = require('react')
const Def = require('./default')

<<<<<<< HEAD
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry we can't find this page!</p>
                <img src="http://placekitten.com/500/500" alt="Cat that is very sorry he can't find your page" />
            </main>
        </Def>
    )
}

module.exports = error404
=======

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>We can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404;
>>>>>>> 834a728964c18fec0ea03891f3813e93c6e001fc
