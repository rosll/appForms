import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { ButtonInfo, TextName, TextEmail, TextPhone } from './styles'

interface InfoCardProps extends TouchableOpacityProps {
  name: string;
  email: string
  phone: string
}

export function InfoCard({ name, email, phone, ...rest }: InfoCardProps) {
  return (
    <ButtonInfo 
      {...rest}
    >
      <TextName>
        Nome: {name}
      </TextName>

      <TextEmail>
        Email: {email}
      </TextEmail>

      <TextPhone>
        Telefone: {phone}
      </TextPhone>

    </ButtonInfo>
  )
}
