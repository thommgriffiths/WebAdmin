import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import { entities, commonAttrs } from "../../Core/util/entities";
import { createQuery } from "../../Core/util/functions";
import styles from "../styles/Editar.style";

import DropdownSelect from "../../sharedComponents/DropDownSelect";

const FiltrarPedidoDeObra = ({ setSearchParams }) => {
  const [obra, setObra] = useState(null);
  const [rubro, setRubro] = useState(null);
  const [tipoDePedido, setTipoDePedido] = useState(null);
  const [estado, setEstado] = useState(null);

  useEffect(() => {
    const queryParams = {
      [entities.obra]: obra,
      [entities.rubro]: rubro,
      [commonAttrs.tipoPedidoObra]: tipoDePedido,
      [commonAttrs.POState]: estado,
    };
    const newQuery = createQuery(queryParams);
    setSearchParams(newQuery);
    console.log("current query", newQuery);
  }, [obra, rubro, tipoDePedido, estado]);

  return (
    <View style={styles.container}>
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesText}>Filtrar Pedidos de Obra</Text>
      </View>

      <View style={styles.formWrapper}>
        <View style={[styles.inputWrapper, { zIndex: 20000 }]}>
          <DropdownSelect
            placeholder="Seleccione Obra"
            action={setObra}
            category={entities.obra}
            props={{ stackOrder: 20000 }}
          />
        </View>
        <View style={[styles.inputWrapper, { zIndex: 19800 }]}>
          <DropdownSelect
            placeholder="Seleccione Rubro"
            action={setRubro}
            category={entities.rubro}
            props={{ stackOrder: 19800 }}
          />
        </View>
        <View style={[styles.inputWrapper, { zIndex: 19500 }]}>
          <DropdownSelect
            placeholder="Seleccione tipo de pedido"
            action={setTipoDePedido}
            category={commonAttrs.tipoPedidoObra}
            props={{ stackOrder: 19500 }}
          />
        </View>
        <View style={[styles.inputWrapper, { zIndex: 19200 }]}>
          <DropdownSelect
            placeholder="Seleccione estado del pedido"
            action={setEstado}
            category={commonAttrs.POState}
            props={{ stackOrder: 19200 }}
          />
        </View>
      </View>
    </View>
  );
};

export default FiltrarPedidoDeObra;
