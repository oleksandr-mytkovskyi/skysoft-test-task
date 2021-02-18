import './AvrColumn.css'

export const AvrColumn  = ({id, amount}) => {
    return (
        <div className='block res-block' id={id}>
          {amount}
        </div>
    )
}

