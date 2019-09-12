//INTERACTION MANAGER
/*componentDidMount() {
    InteractionManager.runAfterInteractions (() => {
        this.PaymentResponse.userActions.fetchContact();
        this.ListeningStateChangedEvent({isReady: true});
    });
}*/

/*<MapView>
    provider={}
    style={StyleSheet.Mapbox}
    region={{ 
        latitude: this.props.initialPosition.latitude,
        longitude: this.props.initialPosition.longitude,
        latitudeDelta: latitude_Delta,
        longitudeDelta: longitude_Delta
        }}
        ZoomEnabled={true}
        minZoomLevel={7}
        maxZoomLevel={18}
        showMyLocationButton={true}
        showUserLocationButton={true}
        ..... {'..'}
</MapView> */

//import Button from './app/components/Button';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class  Button extends Component {

    render () {
        return (
            <View>
                <Button 
                title="Localisation"
                color="#E2001A"
              />
            </View>
        )
    }
}