import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { LikeSvg, DislikeSvg, AddSvg, ShareSvg, DownloadSvg, MoreSvg } from '../../Libs/Svg';


const Chapter = ({ styles, setSelectedSeason, selectedSeason, seasonData, moviesData }) => {

    const SeasHandle = (id) => {
        setSelectedSeason(id);
    };


    return (
        <>
            <View style={styles.tabs}>
                {seasonData && seasonData.map((seas) => (
                    <TouchableOpacity key={seas.id} onPress={() => SeasHandle(seas.id)}>
                        <Text style={[styles.tab, selectedSeason === seas.id && styles.activeTab]}>{seas.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.episodesContainer}>
                {selectedSeason === 1 ? (
                    <>
                        {moviesData.map((episode) => (
                            <View style={styles.episode} key={episode.id}>
                                <View style={styles.episodeImage}>
                                    <Image style={styles.episodeCover} source={{ uri: episode.img }} />
                                </View>
                                <View>
                                    <Text style={styles.episodeText}>{episode.chapter}</Text>
                                    <Text style={styles.episodeTitle}>{episode.title}</Text>
                                    <Text style={styles.duration}>{episode.second}</Text>
                                </View>
                                <View style={styles.episodeIcon}>
                                    <DownloadSvg />
                                    <MoreSvg />
                                </View>
                            </View>
                        ))}
                    </>
                ) : (
                    <>
                        {Array.isArray(moviesData) && moviesData.slice().reverse().map((episode) => (
                            <View style={styles.episode} key={episode.id}>
                                <View style={styles.episodeImage}>
                                    <Image style={styles.episodeCover} source={{ uri: episode.img }} />
                                </View>
                                <View>
                                    <Text style={styles.episodeText}>{episode.chapter}</Text>
                                    <Text style={styles.episodeTitle}>{episode.title}</Text>
                                    <Text style={styles.duration}>{episode.second}</Text>
                                </View>
                                <View style={styles.episodeIcon}>
                                    <DownloadSvg />
                                    <MoreSvg />
                                </View>
                            </View>
                        ))}
                    </>
                )}
            </View>
        </>
    )
}
export default Chapter;
