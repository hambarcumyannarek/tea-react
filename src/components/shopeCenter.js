
import React from 'react';

export function ShopeCenter({state, callback}) {
    const elements = state.map((card, i) => {
        return (
            <div className='card' key={card.id}>   
                <div className='img'>
                    <img src={`.${card.src}`} />
                </div>
                <div className='info'>
                    <h3 className='infoTitle'>{card.name}</h3>
                    <div className='buyCont'>
                        <p className='price'>{card.price}</p>
                        <div className='shopeBtn' onClick={() => {
                            if(!card.isBuy) {
                                callback(card.id)
                            } else {
                                alert('Այս պրոդուկտը առկա է ձեր գնումների ցանկում.')
                            }
                        }}>
                            <i className="fa-solid fa-cart-shopping"></i>
                         </div>
                    </div>
                </div>
            </div>
        )    
    })

    return (
        <div className='shopeCenter section'>
            <div className='shopeCenterContainer container'>
                <div className='title'>
                    <h2>Կարող եք ընտրել ձեր նախընտրած թեյը</h2>
                    <p>գնելով 5 և ավել տեսակի թեյեր, հնարավորություն կունենաք շահելու ֆիրմային բաժակներ, պայուսակներ և այլ նվերներ։</p>
                </div>
                <div className='boxes'>
                    {elements}
                </div>
            </div>
        </div>
    )
}


