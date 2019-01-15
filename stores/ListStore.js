import { observable } from 'mobx';

let index = 0

class ObservableListStore {

    @observable
    messages = ['Hello', 'Damned']


    addMessage(newMessage) {
        this.messages.push(newMessage);
    }

    setFirstMessage() {
        this.messages[0] = 'Bonjour !';
    }
}


const observableListStore = new ObservableListStore()
export default observableListStore