import React from 'react';
import { Text, StyleSheet, Pressable } from "react-native"
import { SIZES, FONTS, COLORS, SHADOW } from "../constants"
import { CheckBox } from 'react-native-elements'

const styles = StyleSheet.create({
    view: {
        ...SHADOW,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        marginBottom: 15
    },
    text: {
        ...FONTS.h2_semiBold,
        color: COLORS.accent
    }
})

export default function Card(props) {

    
    return <Pressable style={styles.view} onLongPress={() => props.deleteItem(props.index)}>
        <CheckBox
            checked={props.data.isSelected}
            onPress={(value) => props.setIsSelected(props.index, !props.data.isSelected)}
        />
        <Text style={{...styles.text, textDecorationLine: props.data.isSelected ? "line-through" : "none"}}>{props.data.text}</Text>
    </Pressable>
}