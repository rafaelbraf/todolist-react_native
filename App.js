import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Button
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      itens: [
        {key: "0", desc: "item 1", done: false},
        {key: "1", desc: "item 2", done: false}
      ]
    }
    this.inserirItem = this.inserirItem.bind(this);
  }

  renderItem(obj) {
    return(
      <Text style={styles.cell}>{obj.item.desc}</Text>
    );
  }

  inserirItem() {

    let newItem = {
      key: this.state.itens.length.toString(),
      desc: this.state.text,
      done: false
    }

    let itens = this.state.itens;
    itens.push(newItem);
    this.setState({itens})

    let text = "";
    this.setState({text})

  }

  render() {
    return(
      <View style={styles.container}>
        <FlatList 
          style={styles.lista} 
          data={this.state.itens} 
          renderItem={this.renderItem} 
          extraData={this.state} />
        <View style={styles.inputView}>
          <TextInput 
            style={styles.input} 
            onChangeText={(text) => this.setState({text})} 
            value={this.state.text} />
          <Button onPress={this.inserirItem} title="Inserir" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff'
  },
  lista: {
    marginTop: 24
  },
  cell: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#e4ebee",
    fontSize: 18,
    marginBottom: 2
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 3,
    padding: 10,
    margin: 20,
    flex: 1
  }
})
