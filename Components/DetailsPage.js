import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Header, Button as Btns} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

export default class DetailsPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={{margin:0}}
                    leftComponent={
                        <Btns
                            type="clear"
                            icon={
                                <Icon
                                    name="ios-menu"
                                    size={25}
                                    color="white"
                                />
                            }
                            onPress={()=>this.props.navigation.openDrawer()}
                        />
                    }
                    centerComponent={{ text: `DETAILS DU PRODUIT`, style: { color: '#fff', fontSize:19 } }} 
                />
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
