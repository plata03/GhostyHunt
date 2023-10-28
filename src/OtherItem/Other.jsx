import './otherstyle.css'

export const Other = ({nome, imgbb, descri, bai}) => {
    return (
        <div className='other-item-card-container'>
            <div className='other-item-card'>
                <img style={{borderRadius: 5, margin: 'auto'}} src={imgbb} width={600} height={'auto'} />
                <div className='other-texts-card'>
                    <h1 className='other-title-item'>{nome}</h1>
                    <p className='other-desc-item'> {descri} </p>
                    <p style={{color: 'white', fontSize: 12}}>Found in/Dropped by:</p>
                    <img src={bai} width={100} height={100} />
                </div>
            </div>
        </div>
    )
}