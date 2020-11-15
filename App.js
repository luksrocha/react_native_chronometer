import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      texto: "Começar",
      ultimo: null
    }

    this.timer = null;
    this.count = this.count.bind(this);
    this.stop = this.stop.bind(this);

  }

  count() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        texto: 'Começar'
      });
    } else {
      this.timer = setInterval(() => {
        this.setState({
          numero: this.state.numero + 0.1,
          texto: "Pausar"
        });
      }, 100);
    }
  }

  stop() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      texto: 'Começar',
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/assets/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>
          {this.state.numero.toFixed(1)}
        </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity
            onPress={this.count}
            style={styles.btn}
          >
            <Text style={styles.btnTexto}>{this.state.texto}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.stop}
            style={styles.btn}
          >
            <Text style={styles.btnTexto}>Zerar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltimo}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 85,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltimo: {
    marginTop: 40
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }

})

export default App;