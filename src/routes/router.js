import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Telas
import Login from '../pages/Login';
import TelaInicial from '../pages/TelaInicial';
import ClientCadastro from '../pages/ClientCadastro';
import ClientCadastro1 from '../pages/ClientCadastro1';
import ClientCadastro2 from '../pages/ClientCadastro2';
import ListaBarbeiro from '../pages/ListaBarbeiro';
import UserCadastro from '../pages/UserCadastro';
import UserCadastro1 from '../pages/UserCadastro1';
//
const Tab = createBottomTabNavigator();

export default function router(){
    return(
      
    <Tab.Navigator >
        <Tab.Screen name = 'TelaInicial' component = {TelaInicial} />
        <Tab.Screen name = 'Login' component = {Login} />
        <Tab.Screen name = 'ClientCadastro' component = {ClientCadastro} />
        <Tab.Screen name = 'ClientCadastro1' component = {ClientCadastro1} />
        <Tab.Screen name = 'ClientCadastro2' component = {ClientCadastro2}/>
        <Tab.Screen name = 'ListaBarbeiro' component = {ListaBarbeiro}/>
        <Tab.Screen name = 'UserCadastro' component = {UserCadastro}/>
        <Tab.Screen name = 'UserCadastro1' component = {UserCadastro1}/>
      
    </Tab.Navigator>
    );
}


