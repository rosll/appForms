import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Title, Input } from './styles'
import { Button } from '../components/Button/Button';
import { InfoCard } from '../components/InfoCard/InfoCard';

interface IInfoData {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export function Home({}) {
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [myInfos, setMyInfos] = useState<IInfoData[]>([])

  function handleAddNewInfo() {
    const data = {
      id: String(new Date().getTime()),
      name: newName,
      email: newEmail,
      phone: newPhone,
    }

    setMyInfos([...myInfos, data])
    setNewName('')
    setNewEmail('')
    setNewPhone('')
  }

  function handleRemoveInfo(id: string) {
    setMyInfos(myInfos => myInfos.filter(info => info.id !== id))
  }


  useEffect(() => {
    async function loadData() {
      const storagedInfos = await AsyncStorage.getItem('@myinfos:infos')
      if (storagedInfos) {
        setMyInfos(JSON.parse(storagedInfos))
      } 
    }
    loadData()

    // async function removeAll() {
    //   await AsyncStorage.removeItem('@myinfos:infos')
    // }
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@myinfos:infos', JSON.stringify(myInfos))
    }
    saveData()
  }, [myInfos])

  return (
    <>
      <LinearGradient
        colors={['#fa709a', '#fee140']}
        style={{
          flex: 1
        }}
      >
        <Container>
            <Title>Preencha todos os campos</Title>

            <Input  
              placeholder='Nome'
              placeholderTextColor='#9D9D9D'
              value={newName}
              onChangeText={n => setNewName(n)}
            />

            <Input  
              placeholder='Email'
              placeholderTextColor='#9D9D9D'
              value={newEmail}
              onChangeText={e => setNewEmail(e)}
            />

            <Input  
              placeholder='Telefone'
              placeholderTextColor='#9D9D9D'
              value={newPhone}
              onChangeText={p => setNewPhone(p)}
            />

            <Button 
              title="Cadastrar"
              onPress={handleAddNewInfo}
            />

            <FlatList 
              showsVerticalScrollIndicator={false}
              data={myInfos}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <InfoCard 
                  name={item.name}
                  email={item.email}
                  phone={item.phone}
                  onPress={() => handleRemoveInfo(item.id)}
                />
              )}
            />
        </Container>
      </LinearGradient>
    </>
  );
}
