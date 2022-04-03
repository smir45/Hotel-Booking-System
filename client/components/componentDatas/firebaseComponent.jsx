import * as React from 'react';
import firebase from '../../firebase.config';

export default class FirebaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const messaging = firebase.messaging();
        messaging
            .requestPermission()
            .then(() => {
                console.log('Notification permission granted.');
                return messaging.getToken();
            })
            .then(token => {
                console.log(token);
                this.setState({token});
            })
            .catch(err => {
                console.log('Unable to get permission to notify.', err);
            });
    }

    render() {
        return (
            <div>
                <h1>Firebase Component</h1>
            </div>
        );
    }
}