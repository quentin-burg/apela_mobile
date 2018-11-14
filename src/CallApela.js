// Vue où l'on affiche le numéro de téléphone
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

// Mettre un component. 
// utilisé le state local du component (isChecked) qui est a false. 
// Dans le render, utilisé ? pour tester isChecked, si false, on affiche la chqBox, si c'est à true on affiche le numéro
  // quand on clique sur la checkboxe, ca met a jour le state local ou handle check, cela va rerender le composant donc va se mettre à jour
  // 

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center; 
  background-color: #d1603d;
`;

const NumeroStyle = styled.Text`
  visible: hidden;
`;

handleckec () [
  this.setstate({
    isChecked: true,
  })
]

const CallApela = () => (
  <Container>
    <NumeroStyle>CALL</NumeroStyle>
    {this.state.isChecked ? <check onClick={() => this.handleckec()}></check> : <numero></numero>}
  </Container>
);

export default CallApela;
