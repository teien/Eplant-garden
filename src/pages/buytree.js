export default function BuyTree() {
    return (
        <div className="container d-flex justify-content-center"><table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Product Name</th>

                    <th scope="col-">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Hoa tươi</td>
                    <td>12121212121</td>
                </tr>
            </tbody>
            <div class="d-flex justify-content-center gap-2">
                <button type="button " className="btn btn-primary d-block mt-3 ">Pay</button>
                <button type="button " className="btn btn-danger d-block mt-3">cancelled</button></div>

        </table></div>
    )
}