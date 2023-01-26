import React, { useState } from "react";
import { Text, View, Modal, Pressable, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { commonAttrs, entities, POStates } from "../../Core/util/entities";
import { updateElement } from "../../Core/util/functions";
import { palette } from "../../Core/colors";

const POActionsModal = ({ modalParams, setParams }) => {
  const [newStatus, setNewStatus] = useState(modalParams.item.POState);

  const edit = () => {
    let item = {};
    item[commonAttrs.id] = modalParams.item[commonAttrs.id];
    item[commonAttrs.type] = entities.pedidoDeObra;
    item[commonAttrs.POState] = newStatus;

    const onUpdateSuccess = () => {
      setParams({ visible: false, affectedItem: modalParams.item.id });
    };

    updateElement(item, onUpdateSuccess);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalParams.visible}
      onRequestClose={() => {
        setParams({ ...modalParams, visible: false });
      }}
    >
      <View style={style.centeredView}>
        <View style={style.modalView}>
          <Text style={style.modalText}>Actualizar estado</Text>

          <View style={style.actionsContainer}>
            <Pressable
              style={style.action}
              onPress={() => setNewStatus(POStates.enProceso)}
            >
              <View style={style.iconConatiner}>
                <AntDesign
                  name={
                    newStatus == POStates.enProceso ? "play" : "playcircleo"
                  }
                  size={24}
                  color="grey"
                />
              </View>
              <Text style={style.actionLabel}>En proceso</Text>
            </Pressable>

            <Pressable
              style={style.action}
              onPress={() => setNewStatus(POStates.demorado)}
            >
              <View style={style.iconConatiner}>
                <Ionicons
                  name={
                    newStatus == POStates.demorado ? "timer" : "timer-outline"
                  }
                  size={24}
                  color="yellow"
                />
              </View>
              <Text style={style.actionLabel}>Demorado</Text>
            </Pressable>

            <Pressable
              style={style.action}
              onPress={() => setNewStatus(POStates.resuelto)}
            >
              <View style={style.iconConatiner}>
                <AntDesign
                  name={
                    newStatus == POStates.resuelto
                      ? "checkcircle"
                      : "checkcircleo"
                  }
                  size={24}
                  color="green"
                />
              </View>
              <Text style={style.actionLabel}>Resuelto</Text>
            </Pressable>

            <Pressable
              style={[
                style.action,
                {
                  backgroundColor:
                    newStatus == POStates.desestimado ? "red" : "white",
                },
              ]}
              onPress={() => setNewStatus(POStates.desestimado)}
            >
              <View style={style.iconConatiner}>
                <AntDesign name="delete" size={24} color="black" />
              </View>
              <Text style={style.actionLabel}>Desestimar</Text>
            </Pressable>

            <View style={style.buttonContainer}>
              <Pressable
                style={[style.button, style.buttonUpdate]}
                onPress={() => {
                  edit();
                }}
              >
                <Text style={style.textStyle}>Actualizar</Text>
              </Pressable>
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => {
                  setParams({ ...modalParams, visible: false });
                }}
              >
                <Text style={style.textStyleBis}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default POActionsModal;

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "orange",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  actionsContainer: {},
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    //backgroundColor: palette.neutral,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: palette.B1,
    borderWidth: 2,
  },

  iconConatiner: {
    paddingHorizontal: 5,
    flex: 1,
  },

  actionLabel: { flex: 5 },

  input: {
    backgroundColor: palette.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 2,
    borderColor: palette.B1,
  },

  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  buttonClose: {
    backgroundColor: palette.B1,
    borderWidth: 2,
    borderColor: palette.B1,
  },
  buttonUpdate: {
    borderWidth: 2,
    borderColor: palette.B1,
  },
  textStyle: {
    color: palette.B1,
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleBis: {
    color: palette.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
  },
});
