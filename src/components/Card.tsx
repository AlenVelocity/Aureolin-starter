import { React } from 'aureolin'


const style = {
  card: {
    padding: '1em',
    margin: '1em',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  },
}

const Card = ({ name }: { name: string }): JSX.Element => {
    return (
        <div className="card" style={style.card}>
            <h1>{name}</h1>
        </div>
    )
}

export default Card