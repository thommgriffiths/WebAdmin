import { Text, View, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

import { getFSCollectionAsync } from "../../Core/Firebase/FirebaseFirestoreManager";
import { completeElements } from "../../Core/util/functions";
import { entities } from "../../Core/util/entities";

import Header from "../../sharedComponents/Header";
import Titles from "../../sharedComponents/Titles";
import DeleteModal from "../../sharedComponents/DeleteModal";
import EditModal from "../../sharedComponents/EditModal";
import DetailModal from "../../sharedComponents/DetailModal";
import styles from "../styles/Consultar.style";

const ConsultarPedidosDeObra = ({ navigation }) => {
  const [pedidosObra, setPedidosObra] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalParams, setModalParams] = useState({ visible: false, item: {} });

  useEffect(() => {
    const loadItems = async () => {
      const rawElements = await getFSCollectionAsync(entities.pedidoDeObra);
      const finalElements = await completeElements(rawElements);
      setPedidosObra(finalElements);
      setLoading(false);
    };
    loading ? loadItems() : {};
  }, [loading]);

  useEffect(() => {
    console.log(modalParams);
    if (modalParams["deletedItem"] != undefined) {
      setModalParams({ visible: false });
      setLoading(true);
    }
    if (modalParams["editedItem"] != undefined) {
      setModalParams({ visible: false });
      setLoading(true);
    }
  }, [modalParams]);

  const renderPedidoObra = ({ item }) => {
    return (
      <View style={styles.ListItem}>
        <View style={styles.ListItemText}>
          <Pressable
            onPress={() => {
              setModalParams({
                visible: true,
                actionLabel: "showDetail",
                item: item,
              });
            }}
          >
            <ShortInfo item={item} />
          </Pressable>
        </View>
        <View style={styles.ListItemActions}>
          <Pressable
            style={styles.ListItemEdit}
            onPress={() => {
              setModalParams({
                visible: true,
                actionLabel: "Editar",
                item: item,
              });
            }}
          />
          <Pressable
            style={styles.ListItemDelete}
            onPress={() => {
              setModalParams({
                visible: true,
                actionLabel: "Eliminar",
                item: item,
              });
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header backButton />
      <View style={styles.body}>
        <View style={styles.titlesAndActions}>
          <Titles titleText="Pedidos de obra" />
          <View style={styles.actions}>
            <Pressable
              style={styles.actionsAdd}
              onPress={() => navigation.replace("CrearPedidoDeObraScreen")}
            >
              <Text style={styles.actionsAddText}>+ nuevo</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.listContainer}>
          {loading && <Text>Loading</Text>}
          <FlatList
            data={pedidosObra}
            renderItem={renderPedidoObra}
            keyExtractor={(item) => item.id}
            style={styles.List}
          />
        </View>
      </View>
      {modalParams?.actionLabel == "Eliminar" && (
        <DeleteModal modalParams={modalParams} setParams={setModalParams} />
      )}
      {modalParams?.actionLabel == "Editar" && (
        <EditModal modalParams={modalParams} setParams={setModalParams} />
      )}
      {modalParams?.actionLabel == "showDetail" && (
        <DetailModal modalParams={modalParams} setParams={setModalParams} />
      )}
    </View>
  );
};

export default ConsultarPedidosDeObra;

const ShortInfo = ({ item }) => {
  return (
    <>
      <Text>Tipo de pedido: {item.TipoDePedido}</Text>
      <Text>id: {item.id}</Text>
      <Text>obra: {item.obra?.Nombre}</Text>
      <Text>rubro: {item.rubro?.Nombre}</Text>
    </>
  );
};
