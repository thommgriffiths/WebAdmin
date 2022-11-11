import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import Header from "../../../sharedComponents/Header";
import Botones from "../../../sharedComponents/Botones";
import { createStylesDatosMaestros } from "../stylesheetMaestros";
import {
  rubroConstructor,
  createRubro,
} from "../../../Managers/DatosMaestros/RubroManager";

const CrearRubro = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const styles = createStylesDatosMaestros();

  const handleCrearRubro = () => {
    const nuevoRubro = rubroConstructor(nombre);
    console.log("el rubro creado es: ");
    console.log(nuevoRubro);

    createRubro(nuevoRubro, () => navigation.navigate("Home"));
  };

  return (
    <View style={styles.container}>
      <Header />

      {/* cuerpo*/}
      <View style={styles.body}>
        <KeyboardAvoidingView behavior="height">
          {/*Section title*/}
          <View style={styles.detailTitlesWrapper}>
            <Text style={styles.detailTitlesTitle}>Crear Rubro</Text>
          </View>

          {/*Formulario creacion */}
          <View style={styles.formWrapper}>
            <TextInput
              placeholder="Nombre del rubro"
              value={nombre}
              onChangeText={(text) => setNombre(text)}
              style={styles.input}
            />
          </View>
        </KeyboardAvoidingView>
      </View>

      <Botones
        onOkFunction={handleCrearRubro}
        onOkText={"Crear nuevo rubro"}
        onCancelFunction={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default CrearRubro;