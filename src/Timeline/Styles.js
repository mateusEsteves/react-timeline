import styled from 'styled-components';

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    @media ${props => props.theme.media.desktop} {
        flex-direction: row;
    }
`;

export const TimelineItemContainer = styled.div`
    display: grid;
    width: 100%;
    height: initial;
    grid-template-columns: auto 2fr;
    grid-template-areas: "item description";

    @media ${props => props.theme.media.desktop} {
        grid-template-rows: auto 2fr;
        grid-template-columns: unset;
        grid-template-areas:
            "item"
            "description";
    }
`;

export const TimelineItem = styled.div`
    display: grid;
    overflow: hidden;
    grid-area: item;
    width: ${props => props.milestoneSize};
    height: ${props => `calc(${props.lineSize} + ${props.milestoneSize})`};
    grid-template-rows:
        ${props => props.milestoneSize}
        ${props => props.final ? '' : '1fr'};
    
    @media ${props => props.theme.media.desktop} {
        width: ${props => props.final ? props.milestoneSize : "100%"};
        height: ${props => props.milestoneSize};
        grid-template-columns: ${props => {
            if (props.final) return props.milestoneSize;
            else return `${props.milestoneSize} 1fr`;
        }};
    }
`;

export const ItemDescription = styled.p`
    grid-area: description;
    margin: 8px 0 8px 4px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.isChecked ? props.theme.primaryColor : props.theme.inactiveColor};
    transition: color 1s;
    transition-delay: ${props => props.transitionDelay + 's'};
`;