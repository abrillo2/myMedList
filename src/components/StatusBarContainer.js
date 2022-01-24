import React, {Component} from 'react';
import {StatusBar} from 'react-native';

export default function StatusBarContainer(props){
    return (
        <StatusBar
        backgroundColor="rgba(34, 171, 226, 1)"
        barStyle="light-content"
        hidden={props.hidden}
      />
    );
}