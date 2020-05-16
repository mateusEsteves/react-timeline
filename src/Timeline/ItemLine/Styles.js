import styled from 'styled-components';

const ItemLineBase = styled.div`
    transition: width 1s ease-out; 
    transition-delay: ${props => `${props.transitionDelay}s`};
    border-bottom: solid 3px;
    box-sizing: border-box;
    display: inline-block;
`;

export const ItemLineBackground = styled(ItemLineBase)`
    width: ${props => props.isChecked ? "0" : "100%"};
    border-color: gray;
`;

export const ItemLineChecked = styled(ItemLineBase)`
    width: ${props => props.isChecked ? "100%" : "0"};
    border-color: blue;
`;

export const ItemLineContainer = styled.div`
    margin: auto 0;
    display: flex;
    overflow: hidden;
`;