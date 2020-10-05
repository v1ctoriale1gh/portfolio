import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const handleMouseEnter = (event) => {
  event.target.className = "hovered-text"
  }

const handleMouseLeave = (event) => {
  event.target.className= "nothing"
  }

const makeLinks = (name) => {
  return <StyledLink to={`/portfolio/${name}`} className="link" ><span className="nothing"onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>{name}</span></StyledLink >
  }

export default makeLinks;