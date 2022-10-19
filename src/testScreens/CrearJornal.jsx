import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import Header from "../sharedComponents/Header";
import Botones from "../sharedComponents/Botones";
import { palette } from "../../assets/colors";

import { createJornal, jornalConstructor } from "../Managers/JornalManajer";

const CrearJornal = () => {
  const [obra, setObra] = useState("");
  const [rubro, setRubro] = useState("");
  const [cantidadDias, setCantidadDias] = useState("");

  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.replace("Home");
  };

  const crearJornal = () => {
    //validar que este todo lleno
    let Jornal = jornalConstructor(obra, rubro, cantidadDias);

    console.log(Jornal);
    createJornal(Jornal, navigateBack);
  };

  return (
    <View style={styles.container}>
      <Header />

      {/* form container*/}
      <View style={styles.body}>
        <KeyboardAvoidingView behavior="height">
          {/*Section title*/}
          <View style={styles.detailTitlesWrapper}>
            <Text style={styles.detailTitlesTitle}>Crear Obra</Text>
            <View style={styles.detailTitleCreate}>
              <TouchableOpacity
                onPress={() => {
                  crearJornal();
                }}
              >
                <MaterialIcons name="update" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/*Form */}
          <View style={styles.formWrapper}>
            <TextInput
              placeholder="Obra trabajada"
              value={obra}
              onChangeText={(text) => {
                setObra(text);
              }}
              style={styles.input}
            />
            <TextInput
              placeholder="Rubro trabajado"
              value={rubro}
              onChangeText={(text) => setRubro(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Dias trabajados"
              value={cantidadDias}
              onChangeText={(text) => {
                setCantidadDias(text);
              }}
              style={styles.input}
            />
          </View>
        </KeyboardAvoidingView>
      </View>

      <Botones
        onOkFunction={crearJornal}
        onOkText={"Crear Jornal"}
        onCancelFunction={navigateBack}
      />
    </View>
  );
};

export default CrearJornal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.neutral,
    //justifyContent: 'center',
    //alignItems: 'center'
  },

  //HEader
  headerWrapper: {
    flexDirection: "row",
    backgroundColor: palette.R1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: "center",
    paddingBottom: 30,
  },

  profileImage: {
    backgroundColor: palette.B1,
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  body: {
    justifyContent: "space-between",
    flex: 1,
  },

  // Form Section

  formWrapper: {
    paddingHorizontal: 20,
  },

  //Detail title
  detailTitlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailTitlesTitle: {
    //fontFamily: 'MBold',
    fontSize: 32,
    color: palette.textDark,
    marginTop: 5,
  },
  detailTitleCreate: {
    width: "20%",
    //flexDirection: 'row',
    //backgroundColor: palette.B1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  input: {
    backgroundColor: palette.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 2,
    borderColor: palette.B1,
  },

  //Detail
  itemContainer: {
    paddingHorizontal: 20,
  },

  itemDetail: {
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: palette.B1,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  itemDetailInfo: {
    //width: '70%',
  },
  itemDetailInfoText: {
    paddingVertical: 10,
    fontSize: 20,
    color: palette.textDark,
  },

  //Back button
  backButtonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    backgroundColor: palette.B1,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: palette.white,
    fontWeight: "700",
    fontSize: 16,
  },
});
