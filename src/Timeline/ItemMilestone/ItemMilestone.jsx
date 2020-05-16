import React from 'react';
import { ItemMilestoneBase } from './Styles';
import CheckImage from './CheckImage';


export default function ItemMilestone(props) {
    return (
        <ItemMilestoneBase {...props} >
            <CheckImage {...props} />
        </ItemMilestoneBase>
    );
}