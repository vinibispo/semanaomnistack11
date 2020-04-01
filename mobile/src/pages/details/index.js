import React from 'react'
import {Feather} from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as MailCompose from 'expo-mail-composer'
import {View, TouchableOpacity, Linking, Image} from 'react-native'
import style from './style'

export default function Detail(){
    const route = useRoute()
    const incident = route.params.incident
    const navigation = useNavigation()
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})}`
    function navigateToIncidents(){
        navigation.goBack()
    }
    function sendMail(){
        MailCompose.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }
    function sendMessage(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }
    <View style={style.container}>
        <View styles={style.header}>
          <Image source={logoImg} />
          <TouchableOpacity onPress={navigateToIncidents}>
              <Feather name="arrow-left" size={28} color="#E02041"/>
          </TouchableOpacity>
        </View>
        <View style={style.incident}>
          <Text style={[style.incidentProperty, {margin: 0}]}>ONG:</Text>
          <Text style={style.incidentValue}>{incident.name}</Text>
          <Text style={style.incidentProperty}>CASO:</Text>
          <Text style={style.incidentValue}>{incident.title}</Text>
          <Text style={style.incidentProperty}>VALOR:</Text>
          <Text style={style.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
        </View>
        <View style={style.contactBox}>
            <Text style={style.heroTitle}>Salve o dia</Text>
            <Text style={style.heroTitle}>Seja o Herói desse caso.</Text>
            <Text style={style.heroDescription}>Entre em contato:</Text>

            <View style={style.actions}>
                <TouchableOpacity style={style.action} onPress={sendMessage}>
                    <Text style={style.actionText}>
                        Whatsapp
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={style.actions}>
                <TouchableOpacity style={style.action} onPress={sendMail}>
                    <Text style={style.actionText}>
                        E-mail
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}