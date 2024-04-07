//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// styles.js
// Stylesheet for the application
//
// Last Updated: 12/03/2024
//

import { StyleSheet } from "react-native";
import { SIZES } from "../constants/sizes";
import { COLOURS } from "../constants/colours";

const styles = StyleSheet.create({
    //Main elements
    container: {
        width: "100%",
        backgroundColor: COLOURS.white,
        flex: 1,
    },
    verticalContainer:{
        width: "100%",
        flexDirection: 'column',
    },
    horizontalContainer:{
        width: "100%",
        flexDirection: 'row',
        marginBottom: SIZES.small,
    },
    heading: {
        fontSize: SIZES.xlarge,
        fontWeight: 500,
        marginTop: SIZES.large,
    },
    headingMedium: {
        fontSize: SIZES.large,
        fontWeight: 500,
        marginBottom: SIZES.small,
    },
    headingMediumUppercase: {
        fontSize: SIZES.large,
        fontWeight: 500,
        textTransform: 'uppercase',
    },
    textInput: {
        width: "100%",
        backgroundColor: COLOURS.grayLight,
        padding: SIZES.medium,
        marginTop: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    buttonActive: {
        width: "100%",
        backgroundColor: COLOURS.primary,
        padding: SIZES.small,
        marginTop: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    buttonActiveText: {
        color: COLOURS.white,
        textAlign: "center",
        fontSize: SIZES.large
    },
    buttonInactive: {
        width: "100%",
        backgroundColor: COLOURS.white,
        padding: SIZES.small,
        marginTop: SIZES.medium,
        borderRadius: SIZES.medium,
        borderColor: COLOURS.primary,
        borderWidth: 2,
    },
    buttonInactiveText: {
        color: COLOURS.primary,
        textAlign: "center",
        fontSize: SIZES.large
    },
    buttonInactiveRed: {
        width: "100%",
        backgroundColor: COLOURS.white,
        padding: SIZES.small,
        marginTop: SIZES.medium,
        borderRadius: SIZES.medium,
        borderColor: COLOURS.redDark,
        borderWidth: 2,
    },
    buttonInactiveRedText: {
        color: COLOURS.redDark,
        textAlign: "center",
        fontSize: SIZES.large
    },
    buttonInactiveRed2: {
        width: "100%",
        backgroundColor: COLOURS.redDark,
        padding: SIZES.small,
        marginTop: SIZES.medium,
        borderRadius: SIZES.medium,
        borderColor: COLOURS.redDark,
        borderWidth: 2,
    },
    buttonInactiveRed2Text: {
        color: COLOURS.white,
        textAlign: "center",
        fontSize: SIZES.large
    },
    buttonContainer: {
        marginTop: SIZES.large,
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: COLOURS.black,
        marginLeft: SIZES.small,
        fontSize: SIZES.large,
        fontWeight: 500,
    },
    logoImage: {
        width: 35,
        height: 35,
    },
    wrapper: {
        padding: SIZES.large,
    },
    containerInfoCard: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: COLOURS.grayLight,
        padding: SIZES.medium,
        marginTop: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    containerInfoCardGreen: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: COLOURS.greenLight,
        padding: SIZES.medium,
        marginTop: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    containerInfoCardRed: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: COLOURS.redLight,
        padding: SIZES.medium,
        marginTop: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    textKey: {
        color: COLOURS.gray,
        flex: 1,
    },
    textValue: {
        color: COLOURS.black,
        flex: 3,
    },
    textKeySecondary: {
        color: COLOURS.gray,
        flex: 2,
    },
    textValueSecondary: {
        color: COLOURS.black,
        flex: 3,
    },
    textGreen: {
        color: COLOURS.green,
    },
    textRed: {
        color: COLOURS.redDark,
    },
    containerIcon: {
        width: 50,
        height: 50,
        backgroundColor: COLOURS.white,
        borderRadius: SIZES.medium,
        marginRight: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40,
    },
    registrationNumberContainer:{
        flex: 4,
        backgroundColor: COLOURS.yellow,
        marginTop: SIZES.medium,
        borderRadius: SIZES.small,
        borderLeftColor: COLOURS.primary,
        borderLeftWidth: SIZES.xlarge,
        height: 50,
        justifyContent: 'center',
    },
    //Vehicle card
    containerInfoSavedVehicleCard: {
        flexDirection: 'column',
        backgroundColor: COLOURS.grayLight,
        padding: SIZES.medium,
        marginTop: SIZES.medium,
        borderRadius: SIZES.medium,
        marginRight: SIZES.medium,
    },
    registrationNumberCardContainer:{
        backgroundColor: COLOURS.yellow,
        borderRadius: SIZES.small,
        borderLeftColor: COLOURS.primary,
        borderLeftWidth: SIZES.xlarge,
        height: 50,
        paddingLeft: SIZES.medium,
        justifyContent: 'center',
        flex: 3,
    },
    registrationNumberSavedVehicleCardContainer:{
        backgroundColor: COLOURS.yellow,
        borderRadius: SIZES.small,
        borderLeftColor: COLOURS.primary,
        borderLeftWidth: SIZES.large,
        height: 40,
        paddingLeft: SIZES.medium,
        justifyContent: 'center',
        marginTop: SIZES.small,
    },
    registrationNumberSavedVehicleCardText:{
        textTransform: 'uppercase',
        fontSize: SIZES.large,
        marginRight: SIZES.medium,
    },
    verticalCardContainer:{
        flexDirection: 'column',
        flex: 5,
    },
    verticalSavedVehicleCardContainer:{
        flex: 5,
        justifyContent: 'center',
    },
    containerCardIcon: {
        width: 50,
        height: 50,
        backgroundColor: COLOURS.white,
        borderRadius: SIZES.medium,
        marginRight: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registrationNumberText:{
        textTransform: 'uppercase',
        fontSize: SIZES.large,
        marginLeft: SIZES.medium,
    },
    //Authentication screen
    containerAuthentication: {
        padding: SIZES.large,
    },
    authenticationBannerImage: {
        width: "100%",
        height: 300,
    },
    //Home screen
    containerVehicleSearch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputVehicleSearch: {
        flex: 4,
        backgroundColor: COLOURS.yellow,
        padding: SIZES.medium,
        marginTop: SIZES.medium,
        borderRadius: SIZES.small,
        borderLeftColor: COLOURS.primary,
        borderLeftWidth: SIZES.xlarge,
        textTransform: 'uppercase',
        fontSize: SIZES.large,
        height: 50,
    },
    buttonVehicleSearch: {
        flex: 1,
        backgroundColor: COLOURS.primary,
        padding: SIZES.small,
        marginTop: SIZES.medium,
        borderRadius: SIZES.small,
        height: 50,
        marginLeft: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonVehicleSearchUnsave:{
        flex: 1,
        backgroundColor: COLOURS.white,
        borderColor: COLOURS.primary,
        borderWidth: 2,
        padding: SIZES.small,
        marginTop: SIZES.medium,
        borderRadius: SIZES.small,
        height: 50,
        marginLeft: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconVehicleSearch: {
        width: 20,
        height: 20,
    },
});

export default styles;
