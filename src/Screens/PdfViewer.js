import React from 'react';
import PdfViewerHook from '../hooks/PdfViewerHook'


export default PdfViewer = (props) =>{

    return(
        <PdfViewerHook
            navigation={props.navigation}
            pdfURI={props.route.params.pdfURI}
            client={props.route.params.client}
        />
        
    )

}