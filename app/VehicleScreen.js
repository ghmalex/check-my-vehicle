//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleScreen.js
// Vehicle screen component, responsible getting vehicle information components.
//
// Last Updated: 12/03/2024
//

import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../styles/styles';
import RequestManager from '../components/common/RequestManager';
import {
    getDatabase,
    insertSearchHistory
} from '../components/common/LocalDatabaseManager';

//Import components
import VehicleRegistration from '../components/vehicle/VehicleRegistration';
import VehicleInfoCardPrimary from '../components/vehicle/VehicleInfoCardPrimary';
import MOTCard from '../components/vehicle/MOTCard';
import TaxCard from '../components/vehicle/TaxCard';
import VehicleInfoCardSecondary from '../components/vehicle/VehicleInfoCardSecondary';

export default class VehicleScreen extends Component {

    //Class constructor
    constructor(props) {
        super(props);
        this.state = {
            registrationNumber: '',
            taxStatus: '',
            taxDueDate: '',
            motStatus: '',
            make: '',
            yearOfManufacture: '',
            engineCapacity: '',
            co2Emissions: '',
            fuelType: '',
            markedForExport: '',
            colour: '',
            typeApproval: '',
            revenueWeight: '',
            dateOfLastV5CIssued: '',
            motExpiryDate: '',
            wheelplan: '',
            monthOfFirstRegistration: '',
        };
    }

    //Use the componentDidMount lifecycle method to allow async method to be used
    //from the user token class
    async componentDidMount() {

        //Get vehicle registration
        const { vehicleRegistration } = this.props.route.params;

        //Make request to get car details
        //Use the main server as a proxy as DVLA does not allow requests from localhost
        try {
            const response = await RequestManager.sendRequest('get_vehicle', {
                vehicle_registration: vehicleRegistration,
            });

            //Check response
            if (response.result === 'successful') {
                //Successful vehicle check
                //Get vehicle details
                this.setState({ registrationNumber: response.registrationNumber });
                this.setState({ taxStatus: response.taxStatus });
                this.setState({ taxDueDate: response.taxDueDate });
                this.setState({ motStatus: response.motStatus });
                this.setState({ make: response.make });
                this.setState({ yearOfManufacture: response.yearOfManufacture });
                this.setState({ engineCapacity: response.engineCapacity });
                this.setState({ co2Emissions: response.co2Emissions });
                this.setState({ fuelType: response.fuelType });
                this.setState({ markedForExport: response.markedForExport });
                this.setState({ colour: response.colour });
                this.setState({ typeApproval: response.typeApproval });
                this.setState({ revenueWeight: response.revenueWeight });
                this.setState({ dateOfLastV5CIssued: response.dateOfLastV5CIssued });
                this.setState({ motExpiryDate: response.motExpiryDate });
                this.setState({ wheelplan: response.wheelplan });
                this.setState({ monthOfFirstRegistration: response.monthOfFirstRegistration });

            } else if (response.result === 'error_invalid_user_token') {
                //Invalid user token
                const responseMessage = response.message;
                alert(responseMessage);

                //Redirect user to sign out
                this.props.navigation.replace("SignOutScreen");

            } else if (response.result === 'error') {
                //Something went wrong
                const responseMessage = response.message;
                alert(responseMessage);

            } else {
                //Something went wrong
                alert("Something went wrong, please try again later");
            }

            //Record search in the search history
            try {
                const db = await getDatabase();
                await insertSearchHistory("KR13RFN", db);
            } catch (error) {
                console.error('Error getting database:', error);
            }

        } catch (error) {
            // Something went wrong
            alert("Something went wrong, please try again later");
            console.error('Error in the request:', error);
        }
    }

    render() {


        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>

                    <VehicleRegistration
                        registrationNumber={this.state.registrationNumber}
                    />

                    <VehicleInfoCardPrimary
                        make={this.state.make}
                        yearOfManufacture={this.state.yearOfManufacture}
                        colour={this.state.colour}
                        fuelType={this.state.fuelType}
                    />

                    <MOTCard
                        motStatus={this.state.motStatus}
                        motExpiryDate={this.state.motExpiryDate}
                    />

                    <TaxCard
                        taxStatus={this.state.taxStatus}
                        taxDueDate={this.state.taxDueDate}
                    />

                    <VehicleInfoCardSecondary
                        engineCapacity={this.state.engineCapacity}
                        typeApproval={this.state.typeApproval}
                        revenueWeight={this.state.revenueWeight}
                        wheelplan={this.state.wheelplan}
                        monthOfFirstRegistration={this.state.monthOfFirstRegistration}
                        co2Emissions={this.state.co2Emissions}
                    />

                </View>

            </SafeAreaView>
        );
    }
}
