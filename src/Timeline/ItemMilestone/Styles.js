import styled from 'styled-components';

export const ItemMilestoneBase = styled.div`
    display: flex;
    border-radius: 360px;
    border: solid gray 3px;
    border-color: ${props => props.isChecked ? "blue" : "gray"};
    transition: border-color 1s;
    transition-delay: ${props => `${props.transitionDelay}s`};
`;

export const CustomSvgPath = styled.path`
    fill: ${props => props.isChecked ? "blue" : "grey"};
    transition: fill 1s;
    transition-delay: ${props => props.transitionDelay + 's'};
`;