import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, ListView, Button} from 'react-native';
import _ from 'underscore';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numbers: _.range(10)
    }
  }


  up() {
    let length = this.state.numbers.length
    let arr = this.state.numbers.slice()
    arr.push(length)
    this.setState({
      numbers: arr
    })
  }

  down() {
    this.setState({
      numbers: this.state.numbers.slice(0,this.state.numbers.length-1)
    })
  }

  render() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2)
    })
    return (
        <View style={styles.container}>
          <ListView
            renderRow ={(item) => (
              <View style={{alignItems:'center'}}>
                  <Text>{item}</Text>
              </View>
            )}
            dataSource={dataSource.cloneWithRows(this.state.numbers)}
          />
          <Button title='+' color="#841584" onPress={this.up.bind(this)}>
            <Text>+</Text>
          </Button>
          <View style={{backgroundColor:'blue'}}>
            <Button title='-'  color="white" onPress={this.down.bind(this)}>
              <Text >-</Text>
            </Button>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  container2: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
