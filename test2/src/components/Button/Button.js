import './Button.css'

export const Button  = ({id, amount, isHover,  persent}) => {
    const style = isHover === 1 ? `btn btn-active` : `btn`;
    const stylePersent = isHover === 2
     ? {
        backgroundImage: `linear-gradient(to right, rgb(114, 120, 21) ${persent}%, rgba(255, 255, 255, 0) ${persent}%, rgba(255, 255, 255, 0) 100%, rgb(204, 12, 0) 100%)`
      }
     : {};
     const res = isHover === 2 ? `${persent}%` : amount;
    return (
        <div className={style} id={`${id}`} style={stylePersent}>
            {res}
        </div>
    )
}

