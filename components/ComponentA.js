

import { observe } from 'mobx';
import { observer } from 'mobx-react/native';
import React from 'react';
import { Text, View } from 'react-native';
import store from '../stores/ListStore';

@observer
export class ComponentA extends React.Component {

    componentDidMount() {

        observe(store.messages, (change) => {
            console.log(change);
        })

    }

    render() {

        const { messages } = store;

        return (
            <View>
                <Text> Component A {messages[0]} </Text>
            </View>
        )
    }
}

export default ComponentA
