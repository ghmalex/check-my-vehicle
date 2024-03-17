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
    iconVehicleSearch: {
        width: 20,
        height: 20,
    },
});

export default styles;
