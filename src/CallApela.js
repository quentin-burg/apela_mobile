// Vue où l'on affiche le numéro de téléphone
import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";
import { CheckBox, Button } from "react-native-elements";
import call from "react-native-phone-call";
import { Col, Row, Grid } from "react-native-easy-grid";

const args = {
  number: "+33765567698", // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
`;

const LegalView = styled.View`
  margin-top: 50px;
  margin-bottom: 20px;
`;

const LegalText = styled.Text`
  text-align: center;
  font-size: 10;
`;

const ImportantText = styled.Text`
  text-align: center;
  color: #e53935;
`;

class CallApela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render() {
    // Si state est coché, on affiche le numéro et on ne reaffiche pas la checkbox
    // Si state n'est pas coché, on affiche la checkBox
    return (
      <Grid>
        <Row size={25}>
          <Image
            style={{ flex: 1, height: undefined, width: undefined, resizeMode:'contain' }}
            source={require('assets/logo_name.png')}
          />
          </Row>
        <Row size={40}>
          <Container>
            {this.state.checked ? (
              <Icon.Button
                name="phone"
                color="#212121"
                backgroundColor="#fbc02d"
                onPress={() => call(args).catch(console.error)}
              >
                <Text style={{ fontFamily: "Arial", fontSize: 15, color: "#212121" }}>
                  APPELLE NOUS !
            </Text>
              </Icon.Button>
            ) : (
                <CheckBox
                  title="Je confirme avoir plus de 18 ans."
                  uncheckedColor="#D1603D"
                  checked={this.state.checked}
                  onPress={() =>
                    this.setState({
                      checked: true
                    })
                  }
                />
              )}
            <LegalView>
              <LegalText>
                {
                  "Attention, seule la livraison sur Lille est disponible.\n L'abus d'alcool est dangereux pour la santé, consommez avec modération."
                }
              </LegalText>
            </LegalView>
          </Container>
        </Row>
        <Row size={35}>
          <Image
            style={{ flex: 1, width: 100 + '%', height: null }}
            source={require('assets/beer.jpg')}
          />
        </Row>
      </Grid>
    );
  }
}

export default CallApela;
