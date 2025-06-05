import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

type Routine = {
  id: string
  title: string
  description: string
}

const Rotinas = () => {

  const [routines, setRoutines] = useState<Routine[]>([
    { id: '1', title: 'Exercícios matinais', description: '30 minutos de corrida e alongamento' },
    { id: '2', title: 'Leitura diária', description: 'Ler 20 páginas do livro atual' },
    { id: '3', title: 'Aprender código', description: 'Estudar React Native por 1 hora' },
    { id: '4', title: 'Meditação', description: 'Meditar por 15 minutos' },
    { id: '5', title: 'Planejamento do dia', description: 'Organizar tarefas e prioridades' },
    { id: '6', title: 'Caminhada ao ar livre', description: 'Caminhar por 30 minutos' },
  ])

  const renderRoutine = ({ item }: { item: Routine }) => (
    <View style={styles.routineCard}>
      <Text style={styles.routineTitle}>{item.title}</Text>
      <Text style={styles.routineDescription}>{item.description}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ROTINA PARA QUINTA-FEIRA</Text>
      {routines.length === 0 ? (
        <Text style={styles.emptyMessage}>Você ainda não cadastrou nenhuma rotina.</Text>
      ) : (
        <FlatList
          data={routines}
          keyExtractor={item => item.id}
          renderItem={renderRoutine}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF', 
    paddingHorizontal: 20,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white', 
    marginBottom: 25,
    textAlign: 'center',
  },
  emptyMessage: {
    fontSize: 18,
    color: '#dcdcfb', 
    textAlign: 'center',
    marginTop: 40,
  },
  listContent: {
    paddingBottom: 30,
    width: '100%',
  },
  routineCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    width: '100%',
    // Sombra para Android
    elevation: 5,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  routineTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6C63FF', 
    marginBottom: 6,
  },
  routineDescription: {
    fontSize: 16,
    color: '#333',
  },
})

export default Rotinas
