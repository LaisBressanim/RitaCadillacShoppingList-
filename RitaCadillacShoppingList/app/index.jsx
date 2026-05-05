import { link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
       <View style={styles.containerImage}>
        <Image
         source={require('../assets/avatar.png')}
         style={styles.avatar}
        
        />
        </View>
       <View style={styles.content}>
       <Text style={styles.title}>RitaCadillacShoppingList </Text>
       <text style={styles.text}>
         Monte sua lista de compras e não esqueça mais
         o que precisa comprar ao sair de casa!!!
       </text>
       <link style={styles.button} href={'/home'}>
       <text style={styles.buttonText}>Acessar</text>
        </link>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   containerImage: {
    flex: 2,
    alignItems:'center',
    justifyContent:'center',
  },
   download: {
    width:230,
    height:230,
    resizeMode:'cover',
    borderRadius:115,
  },
  content:{
    flex:1,
    backgroundColor:'#dadada',
    borderTopStartRadius:25,
    borderTopEndRadius:25,
    paddingHorizontal:'5%'

  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    marginVertical:20,
    textAlignt:'center',
  },
  text:{
     fontSize:16,
     color:'gray',
  },
    button:{
     position:'absolute',
     backgroundColor:'#000',


    },
});
