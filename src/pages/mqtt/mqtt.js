import React, { Component } from 'react';
import { Connector } from 'mqtt-react';
import { MqttClient } from 'mqtt';
import Paho from "paho-mqtt";

class Mqtt extends Component {
    state = {
        message: this.props.message
    }

    render() {
        // console.log("this is mqtt");
        //var client;

        var timeout = 3000;
        var mqtt = require('mqtt');
        var port = 8000;
        var port2 = 8000;
        var host = "broker.hivemq.com";
        var client, message, clientID = "vijay";

        const connect = () => {
            client = new Paho.Client(host, port, clientID);
            client.connect({ onSuccess: subscribe, onFailure: onConnectionLost, timeout: timeout });

        }
        const connected = () => {
            console.log("connected to ", host, " and port is ", port)
        }
        const subscribe = () => {
            client.subscribe("team jarvis");
            // console.log("message from device ", this.props.message);
            message = new Paho.Message("ID:" + clientID + " " + this.props.message);
            message.destinationName = "team jarvis"
            // console.log("message is ", message);
            client.send(message);
            client.onMessageArrived = onMessageArrived();
        }
        const reconnect = () => {
            client = new Paho.Client(host, port2, "vijay");
            client.connect({ onSuccess: subscribe, onFailure: onConnectionLost, timeout: timeout });
        }
        const onConnectionLost = (responseObject) => {
            if (responseObject.errorCode !== 0) {
                alert("onConnectionLost:" + responseObject.errorMessage);
            }
            setTimeout(connect, reconnect)
        }
        const onMessageArrived = (message) => {
            console.log("onMessageArrived:" + message.payloadString);
        }
        // const connect = () => {
        //     var options = {
        //         onSuccess: onConnected,
        //         timeout
        //     }
        //     client = mqtt.connect("broker.hivemq.com")
        //     client.on("connect", { options })
        // }
        // const onConnected = () => {
        //     alert("connected");
        //     console.log("connected")
        // }

        return (
            <div>
                {connect()}
            </div>
        );

    }
}



export default Mqtt;