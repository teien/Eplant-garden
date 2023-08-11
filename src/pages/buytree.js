
export default function BuyTree() {
    const styleBtn = {
        width: 150,
        height: 80,
        borderRadius: 12,
        border: "none",
        display: "block"
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
                    <tr>
                        <th scope="row " className="d-flex gap-3" style={{ alignItems: "center" }}>
                            <img className="d-block" style={{ width: 100 }} src="https://cdn.shopify.com/s/files/1/0150/6262/products/The-Sill_HoyaCarnosa_Small_Hyde_Mint_Variant.jpg?v=1690598107&amp"></img>
                            <p >Hoya Carnosa Tricolor</p>
                        </th>
                        <td style={{ lineHeight: "120px", textAlign: "center" }}>1</td>
                        <td style={{ lineHeight: "120px", textAlign: "center" }}>$68</td>
                        <td style={{ lineHeight: "120px", textAlign: "center" }}>
                            <a style={{ color: "red" }}>Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row " className="d-flex gap-3" style={{ alignItems: "center" }}>
                            <img className="d-block" style={{ width: 100 }} src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669"></img>
                            <p >Aglaonema Wishesr</p>
                        </th>
                        <td style={{ lineHeight: "120px", textAlign: "center" }}>1</td>
                        <td style={{ lineHeight: "120px", textAlign: "center" }}>$78</td>
                        <td style={{ lineHeight: "120px", textAlign: "center" }}>
                            <a style={{ color: "red" }}>Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row " className="d-flex gap-3" style={{ alignItems: "center" }}>
                            <img className="d-block" style={{ width: 100 }} src="https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-bromeliad_pink.jpg?v=1680539579"></img>
                            <p >Bromeliad Antonio Pink</p>
                        </th>
                        <td style={{ lineHeight: "120px", textAlign: "center" }}>1</td>
                        <td style={{ lineHeight: "120px", textAlign: "center" }}>$78</td>
                        <td style={{ lineHeight: "120px", textAlign: "center" }}>
                            <a style={{ color: "red" }}>Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="row" style={{
                width: "70%",
                height: 80,
                backgroundColor: "#eeeee4",
                position: "fixed",
                bottom: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}>
                <div className="col-7"></div>
                <div className="col-5 row">
                    <div className="col-6" style={{display:"flex", gap: 20}}>
                        <h1 style={{ marginTop: 20, fontWeight: 600 }}>Total:</h1>
                        <h1 style={{ marginTop: 20, fontWeight: 600 }}>$224</h1>
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