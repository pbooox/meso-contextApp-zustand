import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCounterStore } from '../../store/counter-store';
import { useEffect } from 'react';
import { styles } from '../../../config/app-theme';

export const SettingsScreen = () => {

  const count = useCounterStore(state => state.count);
  const increaseBy = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();

  // cambiamos el titulo del navigator cada que cambiamos el contador
  useEffect( () => {
    navigation.setOptions({
      title: `Contador: ${ count }`
    })

  },[ count ])

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Count: { count }</Text>
      <Pressable 
        style={ styles.primaryButton }
        onPress={ () => increaseBy(+1) }
      >
        <Text>+1</Text>
      </Pressable>
      <Pressable 
        style={ styles.primaryButton }
        onPress={ () => increaseBy(-1) }
      >
        <Text>-1</Text>
      </Pressable>
    </View>
  )
}