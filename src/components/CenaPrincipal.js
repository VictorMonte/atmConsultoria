import React, { Component } from 'react';
import { 
    View, 
    StatusBar,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                <StatusBar
                    //hidden
                    backgroundColor='#CCC' 
                />

                <BarraNavegacao />  

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>

                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>

                        {/* Cliente */}
                        <TouchableHighlight
                            underlayColor={'#B9C941'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'cliente' });
                            }}
                        >
                            <Image style={styles.imgMenu} source={menuCliente} />
                        </TouchableHighlight>

                        {/* Contato */}
                        <TouchableHighlight
                            underlayColor={'#61BD8C'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'contato' });
                            }}
                        >
                            <Image style={styles.imgMenu} source={menuContato} />
                        </TouchableHighlight>

                    </View>
                    
                    <View style={styles.menuGrupo}>

                        {/* Empresa */}
                        <TouchableHighlight
                            underlayColor={'#EC7148'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'empresa' });
                            }}
                        >
                            <Image style={styles.imgMenu} source={menuEmpresa} />
                        </TouchableHighlight>

                        {/* Servicos */}
                        <TouchableHighlight
                            underlayColor={'#19D1C8'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'servicos' });
                            }}
                        >
                            <Image style={styles.imgMenu} source={menuServico} />
                        </TouchableHighlight>

                    </View>
                    
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
});

