import React, { useState, useEffect } from 'react';
import ItemLine from './ItemLine/ItemLine';
import ItemMilestone from './ItemMilestone/ItemMilestone';
import {
    TimelineContainer,
    TimelineItem,
    ItemDescription,
    TimelineItemContainer
} from './Styles';

export default function Timeline({ status, milestoneSize, lineSize, checkedStatusIndex }) {
    const [lastCheckedStatusIndex, setLastCheckedStatus] = useState();

    // adicionado um delay para alteração do ultimo status selecionado
    // para evitar problemas na animação da timeline
    useEffect(() => {
        setTimeout(() => setLastCheckedStatus(checkedStatusIndex), 10);
    }, [checkedStatusIndex]);

    const itens = status.map((item, index) => {
        const isLastItem = index === status.length - 1;

        const milestoneShouldBeChecked = index <= checkedStatusIndex;
        const lineShouldBeChecked = index < checkedStatusIndex;

        const milestoneTransitionDelay = lastCheckedStatusIndex == null ? (index * 2) - 1 : 1;
        const lineTransitionDelay = lastCheckedStatusIndex == null ? milestoneTransitionDelay + 1 : 0;

        return (
            <TimelineItemContainer key={index}>
                <TimelineItem milestoneSize={milestoneSize} lineSize={lineSize} final={isLastItem}>
                    <ItemMilestone isChecked={milestoneShouldBeChecked} transitionDelay={milestoneTransitionDelay} />
                    {!isLastItem && <ItemLine isChecked={lineShouldBeChecked} transitionDelay={lineTransitionDelay} />}
                </TimelineItem>
                <ItemDescription
                    isChecked={milestoneShouldBeChecked}
                    transitionDelay={milestoneTransitionDelay}>
                    {item.description}
                </ItemDescription>
            </TimelineItemContainer>
        );
    });

    return (
        <TimelineContainer>
            {itens}
        </TimelineContainer>
    )
}