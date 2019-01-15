import { observer } from 'mobx-react/native';
import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';
import store from '../stores/ListStore';

@observer
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        console.log('hello');


    }

    render() {
        const { messages } = store;

        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>


                    <ComponentA />
                    <ComponentB />

                    <Button onPress={this._handleSetFirstMessage} title="Set first message" />

                </ScrollView>
            </SafeAreaView>
        );
    }

    _handleSetFirstMessage = () => {
        store.setFirstMessage();
    }


}

const styles = StyleSheet.create({});
