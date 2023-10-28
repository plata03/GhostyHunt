import './bossstyle.css';

export const Boss = ({nome, imgbb, descri}) => {
    return (
        <div className="boss-card">
            <img style={styles.immagine} src={imgbb} width={200} height={'auto'} />
            <h1 style={styles.titolo}>{nome}</h1>
            <p style={styles.descri}> {descri} </p>
        </div>
    )
}

const styles = {
    titolo: {
        fontFamily: "chiller",
        color: 'rgb(0, 255, 179)',
        fontSize: 85,
    },
    immagine: {
        marginTop: "5%"
    },
    luogo: {
        marginBottom: "8%",
        color: 'rgb(0, 255, 179)',
    },
    descri: {
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "10%",
        color: 'rgb(0, 255, 179)',
        fontStyle: 'italic',
        fontFamily: 'thin'
    }
}