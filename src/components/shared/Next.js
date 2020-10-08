import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Next({styleArrow, to}) {
    return (
        <Link
        to={to}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} className={` ${styleArrow}`} />
        </Link>
    )
}

export default Next
