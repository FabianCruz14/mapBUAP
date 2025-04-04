import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

// use interface like a metod constructor
// ej:

// create a interface named Person, who have 3 characteristics  : User name, team and gender

interface Person {
    userName : string;
    team : string;
    ranking : number;
}

// we create a function to present people who recive parameters who displays, INTERFACE can help whit
// this Person as parameter
function GrettingCard (person : Person){
    return 'This is ' + person.userName + ", team: " + person.team + ', RANKING ; ' + person.ranking;
}



// interface Maps {
//     region : {
//         latitude: number;
//         longitude: number;
//         latitudeDelta: number;
//         longitudeDelta: number;
//     }
//     initialRegion : {
//         latitude: number;
//         longitude : number;
//         latitudeDelta : number;
//         longitudeDelta : number;
//     }
// }