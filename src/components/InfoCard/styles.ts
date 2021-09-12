import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const ButtonInfo = styled(TouchableOpacity)`
  background: #ff4d53;
  padding: 25px;
  border-radius: 20px;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border-width: 3px;
  border-color: #ddd;
  border-bottom-width: 0px;
  border-right-width: 0px;
`

export const TextName = styled.Text`
  color: #FEFBF3;
  font-size: 19px;
  font-weight: bold;
`

export const TextEmail = styled(TextName)`
  font-size: 15px;
`

export const TextPhone = styled(TextName)`
  font-size: 11px;
`