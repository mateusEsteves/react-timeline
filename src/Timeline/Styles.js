import styled from 'styled-components';

export const TimelineContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const TimelineItemContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: auto 2fr;
    grid-template-areas:
        "item"
        "description";
`;

export const TimelineItem = styled.div`
    display: grid;
    overflow: hidden;
    width: ${props => props.final ? props.height : "100%"};
    height: ${props => props.height};
    grid-template-columns: ${props => {
        if (props.final) return props.height;
        else return `${props.height} 1fr`;
    }};
    grid-area: item;
`;

export const ItemDescription = styled.p`
    grid-area: description;
    margin: 8px 0 8px 4px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.isChecked ? "blue" : "gray"};
    transition: color 1s;
    transition-delay: ${props => props.transitionDelay + 's'};
`;