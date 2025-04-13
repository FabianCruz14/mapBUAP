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

interface Props {
    region : {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    };
}

const Map = ({ region }: Props) => {
    return (
        // we created a View, its same as Div 
        <View style= {styles.container}>
            {/* then create a MapView  */}
            <MapView
                style = {{flex:1}}
                region={region}
                showsUserLocation={true}
                followsUserLocation={true}
            >   
            {markers.length > 0 && (
                    <Marker
                        coordinate={markers[0]}
                        title={markers[0].title}
                        description={markers[0].subtitle}
                        pinColor="blue"
                    />
                )}
            </MapView>
        </View>
    )
}

var markers = [
    {
        latitude : -19.005180,
        longitude : -98.198210,
        title : 'My Location!',
        subtitle : 'This is my location',
    }];

// we create an array of a stylesheets
let styles = StyleSheet.create({
    // create a container styles whit each prop as css
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#00FFFF',
    },
    // then create a container to map
    map : {
        position: 'absolute',
        top : 0,
        left : 0,
        right : 0,
        bottom : 0,
    }
})

export default Map;
// we export the component Map
// this is a component that we can use in other files