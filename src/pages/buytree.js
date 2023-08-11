
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import getListProducts from "../data";
export default function BuyTree() {
    const styleBtn = {
        width: 150,
        height: 80,
        borderRadius: 12,
        border: "none",
        display: "block"
    }
    const [listData, setListData] = useState([]);


    useEffect(() => {
        const prevCartIds = localStorage.getItem('userCart') ? JSON.parse(localStorage.getItem('userCart')) : [];
        const dummyData = getListProducts();
        const myMatchData = dummyData.filter(o => prevCartIds.includes(o.id));

        setListData(myMatchData)
    }, []);
    const totalBill = listData.map( o => +o.price).reduce((a,b)=> a+b,0)
    const handleDelete = (data) => {
        const myData =  listData.filter((item) => item.id !== data.id)
        localStorage.setItem("userCart", JSON.stringify(myData)) 
        setListData(myData)
    }
    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" style={{ fontSize: 20 }}>Products</th>
                        <th scope="col" style={{ textAlign: "center", fontSize: 20 }}>Quantity</th>
                        <th scope="col" style={{ textAlign: "center", fontSize: 20 }}>Unit price</th>
                        <th scope="col" style={{ textAlign: "center", fontSize: 20 }}>Handle</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        listData.map(o=>{
                            return    <tr key={o.id}>
                            <th scope="row " className="d-flex gap-3" style={{ alignItems: "center" }}>
                                <img className="d-block" style={{ width: '100px' }} src={o.img} alt="product-img" />
                                <p >{o.name}</p>
                            </th>
                            <td style={{ lineHeight: "120px", textAlign: "center" }}>1</td>
                            <td style={{ lineHeight: "120px", textAlign: "center" }}>${o.price}</td>
                            <td style={{ lineHeight: "120px", textAlign: "center" }}>
                                <a style={{ color: "red", cursor:"pointer" }} onClick={() => handleDelete(o)}>Delete</a>
                            </td>
                        </tr>
                        })
                    }
                 {
                    listData.length ? null : <tr >
                    <th scope="row " className="text-center py-2 " colSpan={99}>
                       
                        <p >You have no product in cart yet. <span style={{
                            color:"#42c4c1",
                        }}><Link to={"/shop"}>Buy now</Link></span></p>
                    </th>
                    </tr>
                 }
                </tbody>
            </table>
            <div className="row" style={{
                width:1300,
                height: 80,
                position:"fixed",
                backgroundColor: "#eeeee4",
                bottom: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}>
                <div className="col-7"></div>
                <div className="col-5 row">
                    <div className="col-6" style={{display:"flex", gap: 20}}>
                        <h1 style={{ marginTop: 20, fontWeight: 600 }}>Total:</h1>
                        <h1 style={{ marginTop: 20, fontWeight: 600 }}>${totalBill}</h1>
                    </div>
                    <div className="col-6 d-flex  align-items-center">
                        <button type="button" className="btn btn-success d-block" style={{
                            padding:"6px 48px",
                            fontSize: 24, 
                            fontWeight: 600,
                            backgroundColor: "#475f45"
                        }}>Pay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}