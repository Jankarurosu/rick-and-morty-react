export const Buscar = ({ setBuscar, setNumeroPagina }) => {
    return (
        <div>
            <form>
                <input onChange={
                    (e) => {
                        setNumeroPagina(1)
                        setBuscar(e.target.value)
                    }
                }
                    type="text"
                    placeholder="Ingresa el nombre de un personaje"
                    className="form-control col-xs-2" />
            </form>
        </div>
    )
}