import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button, Input, Left, Right, Body, Grid, Row, Col} from 'native-base';


export default function Counter(){
    const [count, setCount] = useState(0);
    const [countVar, setCountVar] = useState(1);
    function onPressInc(){
        setCount(count + countVar);
    }
    function onPressDec(){
        setCount(count - countVar);
    }
    function onPressResetCount(){
        setCount(0);       
    }
    function onPressResetCountVar(){
        setCountVar(1);
    }
    function onChangeCountVar(e){
        setCountVar(Number(e.target.value))
    }
    return (
        <Container>
            <Content padder>           
                <Text>{count}</Text>
                <Grid>
                    <Row>
                        <Col>
                            <Button rounded onPress={onPressDec}><Text>Dec (-)</Text></Button>
                        </Col>
                        <Col>
                            <Button rounded onPress={onPressInc}><Text>Inc (+)</Text></Button>
                        </Col>
                    </Row>
                </Grid>
                <Input keyboardType="numeric" value={countVar} onChange={onChangeCountVar}/>
                <Button block danger onPress={onPressResetCount}><Text>Reset Result</Text></Button>
                <Button block warning onPress={onPressResetCountVar}><Text>Reset Variation</Text></Button>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  