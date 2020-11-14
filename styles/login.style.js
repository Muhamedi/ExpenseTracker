import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    layout: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        padding: 10
    },
    formInput: {
        marginVertical: 10
    },
    textInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 3
    },
    loginButton: {
        width: '30%',
    }
});