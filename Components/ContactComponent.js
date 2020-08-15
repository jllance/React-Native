import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../Shared/campsites";
import { PROMOTIONS } from "../Shared/promotions";
import { PARTNERS } from "../Shared/partners";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact",
  };
  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>
            {`1 Nucamp Way \n Seattle, WA 98001\n U.S.A.\n \n Phone: 1-206-555-1234 \n Email: campsites@nucamp.co`}
          </Text>
        </Card>
      </ScrollView>
    );
  }
}
export default Contact;
