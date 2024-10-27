import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { LikeSvg, DislikeSvg, AddSvg, ShareSvg, DownloadSvg, MoreSvg } from '../../Libs/Svg';




const MovieCover = ({styles}) => {
    return (
        <>
            <View style={styles.coverContainer}>
                <Image
                    source={{ uri: 'https://www.filmarasidergisi.com/wp-content/uploads/2020/12/hukumsuz-dizisi-afisi.jpg' }}
                    style={styles.cover}
                />
                <Text style={styles.title}>Hükümsüz</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>İzlemeye Başla</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.actionIcon}>
                <LikeSvg />
                <DislikeSvg />
                <AddSvg />
                <ShareSvg />
            </View>

            <Text style={styles.description}>
                Esma babasının hukuk bürosunun ikinci patronu olan güzel, hırslı ve güçlü bir kadındır.
                Filiz ise inatçı ama kırılgan bir avukat adayı... Bir cinayet bu iki farklı kadının yollarını kesiştirecek.
            </Text>

            <View style={styles.Type}>
                <Text style={styles.genre}>Dram, Macera</Text>
            </View>

            <View style={styles.ContActors}>
                <Text style={styles.actors}><Text style={{ fontWeight: 'bold' }}>Oyuncular</Text>: Burçin Terzioğlu, Hande Doğandemir, Alican Yücesoy, Mehmet Ulay...</Text>
            </View>
        </>
    )
}

export default MovieCover