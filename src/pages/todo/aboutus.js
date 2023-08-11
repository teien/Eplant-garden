import '../../assets/styles/aboutus.css';
export default function about() {
    return (
        <div className="container mt-5">
            <div className="text-center mb-2-8 mb-lg-6">
                <h2 className="display-18 display-md-16 display-lg-14 font-weight-700" style={{ color: 'green' }}>Why choose Us</h2>

            </div>
            <div className="row align-items-center">
                <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                    <div className="pr-md-3">
                        <div className="text-center text-sm-right mb-2-9 imgl">
                            <div className="mb-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJcCYrSEZUNCtB4UE1OqAuIzk4ZCjXjJekA&usqp=CAU" alt="..." className="rounded-circle" />
                            </div>
                            <h4 className="sub-info">Quality and Variety</h4>
                            <p className="display-30 mb-0">Plant Palace offers diverse high-quality plants.</p>
                        </div>
                        <div className="text-center text-sm-right imgl">
                            <div className="mb-4">
                                <img src="data:image/jpeg;base64,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" alt="..." className="rounded-circle" />
                            </div>
                            <h4 className="sub-info">Guidance and Resources</h4>
                            <p className="display-30 mb-0">Detailed care guides provided for each plant.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                    <div className="why-choose-center-image imgl">
                        <img src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png" alt="..." className="rounded-circle" />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="pl-md-3">
                        <div className="text-center text-sm-left mb-2-9 imgl">
                            <div className="mb-4">
                                <img src="data:image/jpeg;base64,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" alt="..." className="rounded-circle" />
                            </div>
                            <h4 className="sub-info">Community</h4>
                            <p className="display-30 mb-0">Connect with fellow plant enthusiasts.</p>
                        </div>

                        <div className="text-center text-sm-left imgl">
                            <div className="mb-4">
                                <img src="data:image/jpeg;base64,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" alt="..." className="rounded-circle" />
                            </div>
                            <h4 className="sub-info">Environmental Commitment</h4>
                            <p className="display-30 mb-0">Plant Palace supports eco-friendly practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}