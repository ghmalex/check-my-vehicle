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
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import styles from '../styles/styles';
import RequestManager from '../components/common/RequestManager';
import LocalDatabaseManager from '../components/common/LocalDatabaseManager';
import { COLOURS } from '../constants/colours';

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
            isLoading: true,
        };
    }

    //Use the componentDidMount lifecycle method to allow async method to be used
    //from the request manager class
    async componentDidMount() {

        //Get vehicle registration
        const { vehicleRegistration } = await this.props.route.params;

        //Check if vehicle is saved
        //If vehicle is saved, redirect to saved vehicle screen to
        //redirect data form the local database
        const vehicleSavedAlready = await LocalDatabaseManager.checkVehicleSavedById(vehicleRegistration);

        if (vehicleSavedAlready) {
            //Vehicle is already saved
            //Redirect to saved vehicle screen
            this.props.navigation.replace("SavedVehicleScreen", { vehicleRegistration });

        } else {
            //Vehicle is not saved
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

                    //Check if vehicle registration is valid
                    if (response.registrationNumber != null) {
                        //Add to search history
                        try {
                            console.log('Inserting search history data');
                            const vehicleRegistration = response.registrationNumber;
                            const make = response.make;
                            await LocalDatabaseManager.insertSearchHistory(vehicleRegistration, make);

                        } catch (error) {
                            console.log('Error inserting data:', error);
                        }
                    }

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

            } catch (error) {
                // Something went wrong
                alert("Something went wrong, please try again later");
                console.error('Error in the request:', error);
            }


        }


        //Set screen loaded
        this.setState({ isLoading: false });


    }

    render() {

        //Check if content is loading
        if (this.state.isLoading) {
            //Content is loading, display activity indicator
            return (
                <ScrollView style={styles.container}>
                    <View style={styles.wrapper}>
                        <ActivityIndicator size="large" color={COLOURS.primary} />
                    </View>
                </ScrollView>
            );
        } else {
            //Content is loaded
            //Check if registrationNumber is returned from DVLA
            //If no registration number is returned, the vehicle does not exist
            if (this.state.registrationNumber == null) {
                return (
                    <ScrollView style={styles.container}>
                        <View style={styles.wrapper}>
                            <Text>Vehicle not found</Text>
                        </View>
                    </ScrollView>
                );
            } else {
                //Registration number is valid
                return (
                    <ScrollView style={styles.container}>
                        <View style={styles.wrapper}>

                            <VehicleRegistration
                                registrationNumber={this.state.registrationNumber}
                                taxStatus={this.state.taxStatus}
                                taxDueDate={this.state.taxDueDate}
                                motStatus={this.state.motStatus}
                                make={this.state.make}
                                yearOfManufacture={this.state.yearOfManufacture}
                                engineCapacity={this.state.engineCapacity}
                                co2Emissions={this.state.co2Emissions}
                                fuelType={this.state.fuelType}
                                markedForExport={this.state.markedForExport}
                                colour={this.state.colour}
                                typeApproval={this.state.typeApproval}
                                revenueWeight={this.state.revenueWeight}
                                dateOfLastV5CIssued={this.state.dateOfLastV5CIssued}
                                motExpiryDate={this.state.motExpiryDate}
                                wheelplan={this.state.wheelplan}
                                monthOfFirstRegistration={this.state.monthOfFirstRegistration}
                                navigation={this.props.navigation}
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

                    </ScrollView>
                );
            }
        }



    }
}
