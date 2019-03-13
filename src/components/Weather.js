import React from 'react'

// the way the code writed is for more clear look
// and make more readable for others
// for props only when the file has props that needs to pass to the app.js file, otherwise, replace () instead of props!!!
const Weather = props => (
  <div className="weather__info">
    { 
      props.temperature && <p className="weather__key">Temperature: 
        <span className="weather__value"> { props.temperature }</span>
      </p>
    }
    { 
      props.humidity && <p className="weather__key">Humidity: 
        <span className="weather__value"> { props.humidity }</span>
      </p>
    }
    { 
      props.city && props.country && <p className="weather__key">Location: 
        <span className="weather__value"> { props.city }, { props.country }</span>
      </p>
    }
    { 
      props.description && <p className="weather__key">Description: 
        <span className="weather__value"> { props.description }</span>
      </p>
    }
    { 
      props.error && <p className="weather__key">
        <span className="weather__error"> { props.error }</span>
      </p>
    }
</div>
);

export default Weather;