import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, {Marker} from "react-native-maps";

// use interface like a template
// ej:


// create a interface named Person, who have 3 characteristics  : User name, team and gender

// interface Player {
//     fullName : string;
//     age : number;
//     position : string;
//   }
  
//   function GrettingCardPlayer (player : Player){
//     return 'GIVE A WARM ROUND OF APPLAUSE FOR: ' + player.fullName + ', have ' + player.age + ' he is a ' + player.position
//   }
  
//   const fchdev = {
//     fullName : 'fchdev',
//     age : 24,
//     position : 'setter'
//   }

// to a object can take a especific interface they check whit these interface

// let nikolov : Player {
//     fullName : 'Simeone Nikolov',
//     age : 18,
//     position : 'setter'
// }
  
//   document.body.textContent = GrettingCardPlayer(fchdev);

type Props = {
    region : {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    };
}

const Map : React.FC <Props> = ({region}) =>{
    return (
        // we created a View, its same as Div 
        <View style= {styles.container}>
            {/* then create a MapView  */}
            <MapView
                style = {styles.map}
                initialRegion={region}
                showsUserLocation={true}
            >   
            <Marker
                coordinate={region}
                title= 'My location'
                description={'This is my location'}
                pinColor="blue"
            />
            </MapView>
        </View>
    )
}


// we create an array of a stylesheets
let styles = StyleSheet.create({
    // create a container styles whit each prop as css
    container : {
        flex : 1,
    },
    // then create a container to map
    map : {
        flex : 1,
    }
})

export default Map;
// we export the component Map
// this is a component that we can use in other files