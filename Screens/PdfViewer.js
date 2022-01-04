import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ImageBackground } from 'react-native'
import PdfViewerHook from '../components/hooks/PdfViewerHook'


export default PdfViewer = (props) =>{

    return(
        <PdfViewerHook
            navigation={props.navigation}
            pdfURI={props.route.params.pdfURI}
            client={props.route.params.client}
        />
        
    )

}