import './itemstyle.css';

export const Item = ({nome, crafting, descri, need}) => {
    return (
        <div className='item-card-container'>
            <div className='item-card'>
                <img style={{borderRadius: 5}} src={crafting} width={500} height={'auto'} />
                <div className='texts-card'>
                    <h1 className='title-item'>{nome}</h1>
                    <p className='desc-item'> {descri} </p>
                    <p style={{color: 'white', textAlign: 'left'}}>Items Needed:</p>
                    <ul style={{marginLeft: '5%', color: 'white', display: 'grid', textAlign: 'left'}}>
                    {need.map((e) => ( 
                        <li>- {e}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}