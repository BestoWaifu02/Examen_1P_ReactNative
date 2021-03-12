import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [Pares, setPares] = useState(0);
  const [ResulPares, setResulPares] = useState("");
  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(1);
  const [ResultFibo, setResultFibo] = useState("0");
  const [Factorial, setFactorial] = useState(1);
  const [ResultFactorial, setResultFactorial] = useState("");
  const [FactAnterior, setFactAnterior] = useState(1);
  const [tempFact, settempFact] = useState(1);
  const [Bandera, setBandera] = useState(0);

  const Par = () => {
    setBandera(1);
    setPares(Pares + 2);
    setResulPares(ResulPares + Pares + "--");
  };

  const Fibo = () => {
    setBandera(2);
    setn2(parseInt(n1) + parseInt(n2));
    setn1(n2);
    setResultFibo(ResultFibo + "," + n2);
  };

  const Fact = () => {
    setBandera(3);
    setFactorial(Factorial + 1);
    setFactAnterior(Factorial);
    settempFact(tempFact * Factorial);
    setResultFactorial(ResultFactorial + "," + tempFact);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Examen Parcial 1 TEAM-UWU</Text>
      </View>
      <Text style={styles.resultados}>
        {Bandera == 1
          ? ResulPares
          : Bandera == 2
          ? ResultFibo
          : ResultFactorial}
      </Text>
      <Button title="Pares" onPress={Par}></Button>
      <Button title="Fibonacci" onPress={Fibo}></Button>
      <Button title="Factorial" onPress={Fact}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: 100,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  resultados: {
    fontSize: 18,
    padding: 10,
  },
});
