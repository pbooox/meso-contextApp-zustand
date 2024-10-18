import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useProfileStore } from '../../store/profile-store'
import { styles } from '../../../config/app-theme'

export const ProfileScreen = () => {

  // se utiliza sin desestructurar el estado para evitar renderizados indeseados

  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );
  const changeProfile = useProfileStore( state => state.changeProfile );


  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>{ name }</Text>
        <Text style={ styles.title }>{ email }</Text>

        <Pressable
          style={ styles.primaryButton }
          onPress={ () => useProfileStore.setState({ name: 'Pedro Cajas' }) }
        >
          <Text>Cambiar nombre</Text>
        </Pressable>
        <Pressable
          style={ styles.primaryButton }
          onPress={ () => useProfileStore.setState({ email: 'pedrocajas@google.com' }) }
        >
          <Text>Cambiar email</Text>
        </Pressable>

        <Pressable
          style={ styles.primaryButton }
          onPress={ () => changeProfile( 'John Doe', 'john.doe@google.com' ) }
        >
          <Text>Regresar a John</Text>
        </Pressable>

    </View>
  )
}
