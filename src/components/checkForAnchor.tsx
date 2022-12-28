import React from 'react';

export default ({ data }) => {
    var anchor = window.location.href.split("#")[1]
    var els = document.querySelectorAll(`a[href='#${anchor}']`)
    if(els[1]) {
        els[1].scrollIntoView() 
    }
   // els.scrollIntoView() 
    return (
        <span style={{"display": "none"}}>
        </span>
      );
  }