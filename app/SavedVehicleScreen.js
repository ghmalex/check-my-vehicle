//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// SavedVehicleScreen.js
// Saved vehicle screen component, responsible getting vehicle information components.
//
// Last Updated: 12/03/2024
//

import React, { Component } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from '../styles/styles';
import RequestManager from '../components/common/RequestManager';
import LocalDatabaseManager from '../components/common/LocalDatabaseManager';

//Import components
import VehicleRegistrationSaved from '../components/vehicle/VehicleRegistrationSaved';
import VehicleInfoCardPrimary from '../components/vehicle/VehicleInfoCardPrimary';
import MOTCard from '../components/vehicle/MOTCard';
import TaxCard from '../components/vehicle/TaxCard';
import VehicleInfoCardSecondary from '../components/vehicle/VehicleInfoCardSecondary';

export default class SavedVehicleScreen extends Component {

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

        //Get vehicle details from the local storage
        try {
            const response = await LocalDatabaseManager.getSavedVehicleByRegistrationNumber(vehicleRegistration);

            //Check response
            if (response !== null) {
                //Successful vehicle check
                //Get vehicle details
                this.setState({ registrationNumber: response.vehicle.registrationNumber });
                this.setState({ taxStatus: response.vehicle.taxStatus });
                this.setState({ taxDueDate: response.vehicle.taxDueDate });
                this.setState({ motStatus: response.vehicle.motStatus });
                this.setState({ make: response.vehicle.make });
                this.setState({ yearOfManufacture: response.vehicle.yearOfManufacture });
                this.setState({ engineCapacity: response.vehicle.engineCapacity });
                this.setState({ co2Emissions: response.vehicle.co2Emissions });
                this.setState({ fuelType: response.vehicle.fuelType });
                this.setState({ markedForExport: response.vehicle.markedForExport });
                this.setState({ colour: response.vehicle.colour });
                this.setState({ typeApproval: response.vehicle.typeApproval });
                this.setState({ revenueWeight: response.vehicle.revenueWeight });
                this.setState({ dateOfLastV5CIssued: response.vehicle.dateOfLastV5CIssued });
                this.setState({ motExpiryDate: response.vehicle.motExpiryDate });
                this.setState({ wheelplan: response.vehicle.wheelplan });
                this.setState({ monthOfFirstRegistration: response.vehicle.monthOfFirstRegistration });

                //Add to search history
                try {
                    console.log('Inserting search history data');
                    const vehicleRegistration = response.vehicle.registrationNumber;
                    const make = response.vehicle.make;
                    await LocalDatabaseManager.insertSearchHistory(vehicleRegistration, make);

                } catch (error) {
                    console.log('Error inserting data:', error);
                }

                await LocalDatabaseManager.getSearchHistory();
                await LocalDatabaseManager.getSavedVehicle();

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

    render() {


        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>

                    <VehicleRegistrationSaved
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

            </SafeAreaView>
        );
    }
}
