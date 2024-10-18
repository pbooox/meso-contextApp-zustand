import {Text, View} from 'react-native';
import {useProfileStore} from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';
import { styles } from '../../../config/app-theme';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = useCounterStore(state => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Text style={ styles.title }>Count: { count }</Text>
    </View>
  );
};