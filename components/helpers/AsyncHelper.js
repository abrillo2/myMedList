//import item list
import AsyncStorage from '@react-native-async-storage/async-storage';
export  async function getData(key){

    try {
          const jsonValue = await AsyncStorage.getItem(key)
          return JSON.parse(jsonValue);
          
    } catch(e) {
      // error reading value
      console.log(e)
    }
}
export  async function saveData(data,key){
    try{
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem(key, jsonValue)
    }catch (e) {
    // saving error
      console.log(e)
    }
}