import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	heading: {
		fontSize: 25,
		textAlign: 'center',
	},
	input: {
		textAlign: 'center',
		marginLeft: 20,
		marginRight: 20,
		height: 50,
		color: 'gray',
		borderColor: 'gray',
		borderWidth: 0.5,
		borderRadius: 10,
	},
	parent: {
		flex: 1,
		padding: 10
	},
   appButtonContainer: {
    elevation: 8,
    backgroundColor: "#003FA2",
    borderRadius: 10,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})