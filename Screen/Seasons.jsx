import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/actions';
import { movies } from './data/Movies';
import { styles } from './styles/styles';
import { seasonData } from './data/sezondata';
import MovieCover from './Component/Movies/MovieCover';
import Chapter from './Component/Movies/Chapter';
import { API_URL } from '@env';

const Seasons = () => {
    const [selectedSeason, setSelectedSeason] = useState(1);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [moviesData, setMoviesData] = useState(movies);

    const loadData = async () => {
        setIsRefreshing(true);
        await dispatch(fetchData(`${API_URL}`));
        setIsRefreshing(false);
        setSelectedSeason(1);
    };

    useEffect(() => {
        loadData();
    }, [dispatch]);

    useEffect(() => {
        data && data.length > 0 ? setMoviesData(data) : null
    }, [data]);

    return (
        <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={loadData} />}>
            <MovieCover styles={styles} />
            <Chapter styles={styles} setSelectedSeason={setSelectedSeason} selectedSeason={selectedSeason} seasonData={seasonData} moviesData={moviesData} />
        </ScrollView>
    );
};

export default Seasons;
