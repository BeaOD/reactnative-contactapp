import React from "react";
import {  FlatList, SafeAreaView, StyleSheet} from "react-native";
import Contact from "./components/Contact";

export default function ContactsScreen (){
    const contacts = [
        {name:'akwan dobi', number:'023-419-419'},
        {name:'kwaa kwaa', number:'023-619-719'},
        {name:'bobo lebobo', number:'023-519-619'},
        {name:'mmofra adanfo', number:'023-319-419'},
        {name:'sika kese3', number:'023-219-319'},
        {name:'woy3  buei', number:'023-819-919'},
    ]

    return(
        <SafeAreaView>
            {/* //FlatList takes 3 props --keyExtractor takes(item,index) */}
            <FlatList 
            data={contacts}
            renderItem={({item})=>{
                return <Contact name={item.name} phone={item.number}/>
            }}
            keyExtractor={(item)=>item.number}
            />
        </SafeAreaView>

    )
}