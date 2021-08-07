import React from 'react'


const Coin = ({name,image,symbol,price,volume,priceChange,marketcap}) => {
    return (
    
            <tr className="coin__row">
                    <td className="coin__img"><img src={image} alt="crypto"/></td>
                    <td className="coin__name"><p>{name}</p> </td>
                    <td className="coin__symbol"><p>{symbol}</p></td>
                    <td className="coin__price"><p>${price}</p></td>
                    <td className="coin__volume"><p>${volume.toLocaleString('en-us')}</p></td>

                    
                    {priceChange < 0 ? (<td className="coin__percent red"><p>
                        {priceChange.toFixed(2)}%</p></td>
                         ) : (<td className="coin__percent green"><p>
                        {priceChange.toFixed(2)}%</p></td>) 
                        }
                        <td colSpan="2" className="coin__marketcap"><p>
                            Капитализация: ${marketcap.toLocaleString('en-us')}</p>
                        </td>
            </tr>

    )
}

export default Coin
