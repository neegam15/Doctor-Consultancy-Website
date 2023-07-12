import React from 'react'
import Image1 from './bg1.jpg'
import Card from './Card'
import Sdata from './Sdata'
import './service.css'

function Service() {

    function cardEvent(){
        // alert('f')
    }
    
    return (
        <>
        
            <div className='my-3 mb-5'>
                <h1 className='text-center' style={{fontWeight:'bold'}}>Our Services</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10  mx-auto'>
                        <div className='row gy-4'>

                            {
                                Sdata.map((val,ind)=>{
                                    return <Card key={ind} title={val.title} icon={val.icon} body={val.body} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
