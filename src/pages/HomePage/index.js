import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native-web";

const HomePage = () => {
    return(
        <View style = {styles.container}>
            <View>
                <Image source={require('../../../assets/Logo2.png')} style = {styles.imgLogo}/>
                <Text style = {{color: '#0B3B60'}}>Gerenciando sua clinica</Text>
                <Text style = {{fontSize: '15px', marginBottom: '20px'}}>Escolha qual seção deseja iniciar</Text>
            </View>
            
            <TouchableOpacity style = {styles.bttn}>
                <Image source={require('../../../assets/Frame1.png')} style = {styles.img}/>
                <Text style = {styles.txt}>Medicos</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.bttn}>
                <Image source={require('../../../assets/noun-person.png')} style = {styles.img}/>
                <Text style = {styles.txt}>Pacientes</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.bttn}>
                <Image source={require('../../../assets/noun-calendar.png')} style = {styles.img}/>
                <Text style = {styles.txt}>Consultas</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    img: {
        width: '90px',
        height: '95px',
    },
    imgLogo: {
        height: '35px',
        width: '150px'
    },
    bttn: {
        width: '200px',
        height: '150px',
        backgroundColor: '#0B3B60',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px',
        borderRadius: '10px'
    },
    txt: {
        color: 'white',
        fontSize: '20px'
    }
});
export default HomePage