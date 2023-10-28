import './dimensionstyle.css'

export const Dimension = ({nome, imgbb, descri}) => {
    return (
        <div className='dim-item-card-container'>
            <div className='dim-item-card'>
                <img style={{borderRadius: 5}} src={imgbb} width={600} height={'auto'} />
                <div className='dim-texts-card'>
                    <h1 className='dim-title-item'>{nome}</h1>
                    <p className='dim-desc-item'> {descri} </p>
                </div>
            </div>
        </div>
    )
}