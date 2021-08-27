import React from 'react'
import Footer from '../../components/website/Footer'
import Header from '../../components/website/Header'

const LayoutWebsite = (props) => {
    return (
        <div>
            <Header {...props} />
            {props.children}
            <Footer />
        </div>
    )
}

export default LayoutWebsite
