import styled from 'styled-components';

const ItemLineBase = styled.div`    
    transition: height 1s ease-in-out;
    transition-delay: ${props => `${props.transitionDelay}s`};
    box-sizing: border-box;
    display: inline-block;
    margin: 0;

    @media ${props => props.theme.media.desktop} {
        transition: width 1s ease-out;
        transition-delay: ${props => `${props.transitionDelay}s`};
    }
`;

export const ItemLineBackground = styled(ItemLineBase)`    
    border-left: solid ${props => props.theme.inactiveColor} 3px;
    height: ${props => props.isChecked ? "0" : "100%"};

    @media ${props => props.theme.media.desktop} {
        border-left: unset;
        border-bottom: solid ${props => props.theme.inactiveColor} 3px;
        width: ${props => props.isChecked ? "0" : "100%"};
    }
`;

export const ItemLineChecked = styled(ItemLineBase)`    
    border-left: solid ${props => props.theme.primaryColor} 3px;
    height: ${props => props.isChecked ? "100%" : "0"};

    @media ${props => props.theme.media.desktop} {
        border-left: unset;
        border-bottom: solid ${props => props.theme.primaryColor} 3px;
        width: ${props => props.isChecked ? "100%" : "0"};
    }
`;

export const ItemLineContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media ${props => props.theme.media.desktop} {
        margin: auto 0;
        flex-direction: row;
    }
`;