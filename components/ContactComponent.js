import React from 'react';
import {Text, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const Contact = () => (
  <ScrollView>
    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
      <Card title="Contact Information">
        <Text>121, Clear Water Bay Road</Text>
        <Text>HONG KONG</Text>
        <Text>Tel: +852 1234 5678</Text>
        <Text>Fax: +852 8765 4321</Text>
        <Text>Email:confusion@food.net</Text>
      </Card>
    </Animatable.View>
  </ScrollView>
);

export default Contact;
