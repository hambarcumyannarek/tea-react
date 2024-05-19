
import { useMemo, useEffect, useState, useCallback } from "react";
import { MyReducer } from "../components/myReducer";
import './css/wallet.css'


function DrowData({state, callBack, deleteCard}) {
    const [data, dispatch] = MyReducer(function(state, action) {
        if(action.type === 'minuse-count') {
            action.payload.changeCard.buysCount -= 1;
            console.log(1)
            return [...state]
        }
        if(action.type === 'pluse-count') {
            action.payload.changeCard.buysCount += 1;
            return [...state]
        }
        if(action.type === 'delete-card') {
            return state.filter(card => {
                if(card.id !== action.payload.cardId) {
                    return card;
                }
            })
        }
    }, state)


    // total count
    callBack(data.reduce((aggr, val) => {
        return aggr + val.buysCount;
    }, 0), data.reduce((aggr, val) => {
        return aggr + parseInt(val.price) * val.buysCount;
    }, 0))

    return (
        data.map((card) => {
          
            return  (
                <div className="card" key={card.id}>
                    <div className="deleteCard" onClick={() => {
                        dispatch({
                            type: 'delete-card',
                            payload: {
                                cardId: card.id
                            }
                        })
                        deleteCard(card.id)
                    }}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="img">
                      <img src={card.src} />
                    </div>
                    <div className="info">
                        <div className="top">
                            <h3>{card.name}</h3>
                        <p className="pahust">պահեստում առկա քանակը {card.limit}</p>
                        </div>
                        <p>{card.price}</p>
                        <div className="calculate">
                            <div className="gumar">
                                <button onClick={() => {
                                    if(card.buysCount > 1) {   
                                        dispatch({
                                            type: 'minuse-count',
                                            payload: {
                                                changeCard: card,
                                            }
                                        })
                                    }
                                }}><i className="fa-solid fa-minus"></i></button>
                                <span>{card.buysCount}</span>
                                <button onClick={() => {
                                    if(card.buysCount < card.limit) {
                                        dispatch({
                                            type: 'pluse-count',
                                            payload: {
                                                changeCard: card,
                                            }
                                        })
                                    }
                                }}><i className="fa-solid fa-plus"></i></button>
                            </div>
                            <span>=</span>
                            <input type="text" value={`${parseInt(card.price) * card.buysCount}AMD`} disabled/>
                        </div>
                    </div>
                </div>
            )
        })
    )
}


export function Wallet({state, callback}) {

    const [totalCount, setTotalCount] = useState(0);
    const [totalManey, setTotalManey] = useState(0);

    const func = useCallback((totalCount, totalMoney) => {
            setTotalCount(totalCount);
            setTotalManey(totalMoney);
    }, [])

    return (
       <>   
            <div className="wallet">
                <div className="container walletContainer">
                    <div className="title">
                        <h2>Գնումների զամբյուղ</h2>
                    </div>
                    <div className="boxes">
                        <DrowData state={state} callBack={func} deleteCard={callback}/>
                    </div>
                    <div className="total">
                        <h2>Ընդհանուր</h2>
                        <div className="totalCount">
                            <span>{totalCount}</span>
                            <span>{`${totalManey} AMD`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}