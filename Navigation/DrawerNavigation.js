import React from 'react'
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import PageAccueil from '../Components/PageAccueil'
import PageShopping from '../Components/PageShopping'
import DetailsPage from '../Components/DetailsPage'

const MyDrawerNavigator = createDrawerNavigator({
    "Accueil": {
        screen: PageAccueil,
    },
    "Shopping": {
        screen: PageShopping,
    },
    "Achat de ticket": {
        screen: PageAccueil,
    },
    "trouver un livreur": {
        screen: PageAccueil,
    },
    "point de vente de gaz": {
        screen: PageAccueil,
    },
    'details':{
        screen: DetailsPage,
        navigationOptions:()=>({
            drawerLabel: ()=>null
        })
    },
},

    {
    initialRouteName:"details",
    contentOptions : {
      activeTintColor: '#6eccde'
    },
})

const MyStackNavigator = createStackNavigator({
    "home":{screen: MyDrawerNavigator},
    "Shopping": {screen: PageShopping}
}, {
    initialRouteName: 'home',
    headerMode: 'none
})

const MyApp = createAppContainer(MyStackNavigator)

export default MyApp
