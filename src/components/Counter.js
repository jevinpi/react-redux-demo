import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button  from './Button';

export default class Counter extends Component{
	render(){
		const { count, decrementFn, incrementFn } = this.props;
		return (
			<View style={styles.container}>
				<Button text={"-"} onClick={decrementFn}></Button>
				<Text>{count}</Text>
				<Button text={"+"} onClick={incrementFn}></Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	}
})