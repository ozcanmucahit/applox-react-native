import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
        backgroundColor: '#000000',
    },
    actionIcon: {
        flexDirection: 'row',
        padding: 5,
        marginBottom: 25,
        gap: 35
    },
    coverContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    cover: {
        width: '100%',
        height: 347,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        top: -25 - 26,
        left: -120,
    },
    episodeCover: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    button: {
        backgroundColor: '#F9C623',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 6,
        marginTop: -30,
        width: 376,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        color: '#fff',
        fontSize: 14,
        width: 381,
        height: 88,
        borderBottomWidth: 1,
        borderBottomColor: '#C8C8C83D',
    },
    Type: {
        borderBottomWidth: 1,
        borderBottomColor: '#C8C8C83D',
        top: 26,
        height: 40
    },
    ContActors: {
        top: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#C8C8C83D'
    },
    genre: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 4,
    },
    actors: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 20,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'start',
        marginTop: 48,
        marginBottom: 24
    },
    tab: {
        color: '#ccc',
        padding: 8,
        fontSize: 16,
    },
    activeTab: {
        color: '#FFCA05',
        fontSize: 17,
        fontWeight: 'bold',
    },
    episodesContainer: {
        paddingBottom: 20,
    },
    episode: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    episodeImage: {
        width: 185,
        height: 110,
        backgroundColor: '#555',
        marginRight: 10,
        borderRadius: 6
    },
    episodeText: {
        color: '#C8C8C8',
        flex: 1,
        fontSize: 14,
    },
    episodeTitle: {
        color: '#FFFFFF',
        flex: 1,
        fontSize: 16,
        width: 148
    },
    duration: {
        color: '#C8C8C8',
        fontSize: 14,
    },
    episodeIcon: {
        flexDirection: 'col',
        gap: 24
    }
});