import React, { useState } from 'react';
import {
    TimelineContainer,
    TimelineItem,
    ItemCircle,
    ItemDescription,
    TimelineItemContainer
} from './Styles';

import ItemLine from './ItemLine/ItemLine';

export default function Timeline({ status, timelineHeight, checkedStatusIndex, lastStatusIndex }) {
    const itens = status.map((item, index) => {
        const isLastItem = index === status.length - 1;

        const itemShouldBeChecked = index <= checkedStatusIndex;
        const lineShouldBeChecked = index < checkedStatusIndex;

        const itemTransitionDelay = lastStatusIndex === 0 ? (index * 2) - 1 : 1;
        const lineTransitionDelay = lastStatusIndex === 0 ? itemTransitionDelay + 1 : 0;

        return (
            <TimelineItemContainer key={index}>
                <TimelineItem height={timelineHeight} final={isLastItem}>
                    <ItemCircle isChecked={itemShouldBeChecked} transitionDelay={itemTransitionDelay} />
                    
                    {!isLastItem && <ItemLine isChecked={lineShouldBeChecked} transitionDelay={lineTransitionDelay} />}
                </TimelineItem>
                <ItemDescription
                    isChecked={itemShouldBeChecked}
                    transitionDelay={itemTransitionDelay}>
                    {item.description}
                </ItemDescription>
            </TimelineItemContainer>
        );
    });

    return (
        <TimelineContainer itensLength={itens.length}>
            {itens}
        </TimelineContainer>
    )
}