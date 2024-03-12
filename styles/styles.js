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
    heading: {
        fontSize: SIZES.xlarge,
        fontWeight: 500,

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
