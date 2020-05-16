import React from 'react';
import styled from 'styled-components';

import {CustomSvgPath} from './Styles';

const ImageContainer = styled.div`
    width: 80%;
    height: 80%;
    margin: auto;
`;

export default function ItemMilestone(props) {
    return (
        <ImageContainer>
            <svg viewBox="0 -46 417.81333 417" xmlns="http://www.w3.org/2000/svg">
                <CustomSvgPath {...props} d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" />
            </svg>
        </ImageContainer>
    )
}