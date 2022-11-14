import { Text, View, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

import { getAllPedidosObraAsync } from "../../Managers/EntidadesFinales/PedidoObraManager";
import { completeElements } from "../../Core/util/functions";
import { entities } from "../../Core/types";

import Header from "../../sharedComponents/Header";
import Titles from "../../sharedComponents/Titles";
import DeleteModal from "../../sharedComponents/DeleteModal";
import style from "./VerPedidosObra.style";

const VerPedidosObra = () => {
  const [pedidosObra, setPedidosObra] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalParams, setModalParams] = useState({ visible: false, item: {} });

  useEffect(() => {
    const loadItems = async () => {
      const rawElements = await getAllPedidosObraAsync();
      const finalElements = await completeElements(rawElements);
      setPedidosObra(finalElements);
      setLoading(false);
    };
    loadItems();
  });

  useEffect(() => {
    console.log(modalParams);
    if (modalParams["deletedItem"] != undefined) {
      let newList = pedidosObra.filter(
        (e) => e.id !== modalParams[deletedItem]
      );
      setPedidosObra(newList);
      setModalParams({ visible: false });
    }
  }, [modalParams]);

  const renderPedidoObra = ({ item }) => {
    return (
      <View style={style.ListItem}>
        <View style={style.ListItemText}>
          <Text>Tipo de pedido: {item.TipoDePedido}</Text>
          <Text>id: {item.id}</Text>
          <Text>obra: {item.obraObject?.Nombre}</Text>
          <Text>rubro: {item.rubroObject?.Nombre}</Text>
        </View>
        <View style={style.ListItemActions}>
          <Pressable
            style={style.ListItemEdit}
            onPress={() => {
              setModalParams({
                visible: true,
                actionLabel: "Editar",
                item: { ...item, type: entities.pedidoDeObra },
              });
            }}
          />
          <Pressable
            style={style.ListItemDelete}
            onPress={() => {
              setModalParams({
                visible: true,
                actionLabel: "Eliminar",
                item: { ...item, type: entities.pedidoDeObra },
              });
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Header backButton />
      <View style={style.body}>
        <Titles titleText="Ver pedidos de obra" />
        <View style={style.listContainer}>
          {loading && <Text>Loading</Text>}
          <FlatList
            data={pedidosObra}
            renderItem={renderPedidoObra}
            keyExtractor={(item) => item.id}
            style={style.List}
          />
        </View>
      </View>
      <DeleteModal modalParams={modalParams} setParams={setModalParams} />
    </View>
  );
};

export default VerPedidosObra;
