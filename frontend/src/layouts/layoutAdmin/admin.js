import React from 'react'
import SidebarAdmin from '../../components/admin/SidebarAdmin'
import { Link } from 'react-router-dom'

const LayoutAdmin = ({ children }) => {
    return (
        <div>
            <SidebarAdmin />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    {children}
                </section>
            </div>

        </div>
    )
}

export default LayoutAdmin
