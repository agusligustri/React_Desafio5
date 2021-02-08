const ItemCount = ({stock, onSubstract, onAdd, contador}) => {
    return (
        <>
            <button className="btn btn-secondary" onClick={ () => {onSubstract()}}>-</button>
            <b>{`   ${contador}   ` }</b>
            <button className="btn btn-secondary" onClick={ () => {onAdd(stock)}}>+</button>

            <div>
                <button>Comprar</button>
            </div>
        </>
    );
};

export default ItemCount;