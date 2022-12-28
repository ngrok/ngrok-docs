import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default ({ data }) => {
    const location = useLocation();

    useEffect(() => {
        var els = document.querySelectorAll(`a[href='${location.hash}']`)
        if (els.length > 0) {
            let nodeListArrayForm = Array.from(els)
            var anchorLink = nodeListArrayForm.find(function (atag) { return atag.className == "hash-link" })
            if (anchorLink) {
                anchorLink.scrollIntoView()
            }
        }
    }, [location]);

    return <BrowserOnly>
        {() => <span style={{ "display": "none" }}></span>}
    </BrowserOnly>
}