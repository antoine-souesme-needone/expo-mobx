

import { observer } from 'mobx-react/native';
import React from 'react';
import { Text, View } from 'react-native';
import store from '../stores/ListStore';

@observer
export class ComponentB extends React.Component {


    render() {

        const { messages } = store;

        return (
            <View>
                <Text> Component B {messages[0]} </Text>
            </View>
        )
    }
}

export default ComponentB
