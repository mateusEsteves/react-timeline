import React from 'react';
import {
    ItemLineContainer,
    ItemLineBackground,
    ItemLineChecked
} from './Styles';

export default function ItemLine(props) {
    return (
        <ItemLineContainer>
            <ItemLineChecked {...props} />
            <ItemLineBackground {...props} />
        </ItemLineContainer>
    );
}