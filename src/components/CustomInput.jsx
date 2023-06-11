import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useReducer } from 'react'


const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
            case INPUT_BLUR:
                return { state, touched:true}
                default: state
    }   

}

const CustomInput = ({inicialValue, isValid, onInputChange,id , required, email, max, min, label, errorText, ...otros}) => {

        const [inputState,distpach] = useReducer(inputReducer,{
            value: inicialValue ? inicialValue :"",
            isValid,
            touched : false,

        })
        useEffect(()=>{
            onInputChange(id, inputState.value, inputState.isValid)
        }, [inputState,onInputChange,id])

        const textChange= text =>{
             const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
             let isValid = true
             if (required && text.trim().length === 0) isValid = false
             if(email && !emailRegex.test(text.toLowerCase())) isValid = false 
             if (max && text.length > max) isValid = false
             if  (min !== null && text.length < min) isValid = false

             distpach({
                type: INPUT_CHANGE,
                value:text,
                isValid : isValid 
             })
        }

       const  onBlurHandler = ()=>{
            distpach({
                type:INPUT_BLUR
            })
        }
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            style={styles.input}
            value={inputState.value}
            onChange={textChange}
            onBlur={onBlurHandler}  
            {...otros}
            />
            {!inputState.isValid && inputState.touched &&(
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errorText}</Text>
                </View>
            )}
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
formControl:{
    width: '100%',

},
label: {
    marginVertical: 8,

},
input: {
    paddingHorizontal:2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
},
errorContainer: {
    marginTop:6,
    marginBottom:8
},
errorText:{
    color:"red",

}
})