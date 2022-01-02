import React, { Component } from 'react';

import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

export default class CreateReport extends Component {
    
    
    async createPDF() {

        let htmlString = `<html>
        <h2>
            Date created: mm/dd/yyyy
        </h2>
        <h2>
            Shared with: email, name, phone
        </h2>
        
        <h2>
            Primary Care Doctor:  Dr.name  phone#
        </h2>
        <h2>
            Preferred Pharmacy: name Phone#
        </h2>
        
        <h2 align="center">ACTIVE prescription list for patient name phone</h2>
        
        <table align="center" border=1px solid black; width="80%">
              <tr>
                <th>Medicine</th>
                <th>Date filled</th>
                <th>Doctor</th>
                <th>Strength</th>
                <th>Directions</th>
                <th>Disease </th>
              </tr>
              <tr>
                <td>Aspirin</td>
                <td>3/19/2021</td>
                <td>A. Smith</td>
                <td>direction</td>
                <td>20mg</td>
                <td>headache</td>
              </tr>
        </table>
        
    </html>`

      let options = {
        html: htmlString,
        fileName: 'test',
        directory: 'Documents',
      };
      let file = await RNHTMLtoPDF.convert(options)
      // console.log(file.filePath);
      alert(file.filePath);
    }
  
    render() {
      return(
        <View>
          <TouchableHighlight onPress={this.createPDF}>
            <Text>Create PDF</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }