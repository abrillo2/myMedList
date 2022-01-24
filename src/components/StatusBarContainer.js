import React from 'react';
import {StatusBar} from 'react-native';

export default function StatusBarContainer(props){
    return (
        <StatusBar
        backgroundColor="rgba(34, 171, 226, 0.8)"
        barStyle="light-content"
        hidden={props.hidden}
      />
    );
}