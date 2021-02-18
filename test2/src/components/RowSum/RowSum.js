import './RowSum.css'

export const RowSum  = ({id, amount}) => {
    return (
        <div className='block res-block' id={id}>
          {amount}
        </div>
    )
}

