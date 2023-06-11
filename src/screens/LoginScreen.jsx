import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useCallback, useState, useEffect,useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { singUp } from '../store/actions/Login.action'
import CustomInput from '../components/CustomInput'


const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"


const FormInputUpdateReducer = (state, action) => {
  if (action.type === "FORM_INPUT_UPDATE") {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    }
    
    const updateValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    }
    let updatedFormIsvalid = true
    for (const key in updatedValues) {
      updatedFormIsvalid = updatedFormIsvalid && updatedFormIsvalid[key]
    }
    return {
      inputValues: updatedValues,
      inputValidities: updateValidities,
      formIsValid: updatedFormIsvalid
    }
    
  }
 return state
}




const LoginScreen = () => {
  const distpach = useDispatch();
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (err) {
      Alert.alert("Ocurrio un error", err, [{ text: "OK" }]);
    }
  }, [err])

  const [formState, distpachFormState] = useReducer(FormInputUpdateReducer, {
    inputValues: {
      email: "",
      password: "",

    },
    inpuitValidities: {
      email: false,
      password: false
    },
    formIsValid: false

  })

  const handdleSingup = () => {

    if (formState.formIsValid) {
      distpach(singUp(formState.inputValues.email, formState.inputValues.password))
    }else {
      Alert.alert("Formulario Invalido", "Ingrese un email y password validos", [{text:"OK"}]);
    }
  }

  const onImputChange = useCallback((inputIdentifier, inputValue, inputValidity) => {
    distpachFormState({
      type:FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier
    })
  }, [distpachFormState]
  )

  
  return (
    <KeyboardAvoidingView styles={styles.mainContainer} bohaivor={"padding"} keyboardVerticalOffset={50}>
      <View style={styles.container}>
        <Text style={styles.title}>Azul Marino</Text>

        <Text style={styles.title}>Crear Cuenta</Text>

        <View>
        <CustomInput 
          id="email"
          label="Email"
          KeyboardType="email-address"
          autoCapitalize="none"
          autoCorrect ={false}
          returnKeyType = "next"
          required
          email
          errorText={"Por Favor Ingrese un mail Valido"}
          onInputChange={onImputChange}
          initialValue=""
         />
        </View>

        <View>
        <CustomInput 
          id="password"
          label="Password"
          KeyboardType="default"
          seureTextEntry
          autoCapitalize
          autoCorrect ={false}
          required
          password
          errorText={"Por favor Ingrese una contraseña Valida"}
          onInputChange={onImputChange}
          initialValue=""

         />
        </View>
        <View style={styles.footer}>
         <Button onPress={singUp} title='Registrase'/>
        </View> 
        <View style={styles.footer}>
          <Button title='Iniciar Sesion' />
        </View>
      </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,

  },
  container: {
    width: "100%",
    backgroundColor: "white",
    height: "100%",
    padding: 12

  },
  footer: {
    marginTop: 42,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 18,

  }
})