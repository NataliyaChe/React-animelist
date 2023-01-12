import React from 'react'
import {useParams} from 'react-router-dom'


function SingleAnimePage(props) {
    const params = useParams();
    console.log('params', params);
    return (
        <div className='single-anime'>
            <h2>Single anime page</h2>

        </div>
    );
}

export default SingleAnimePage;