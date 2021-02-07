import React, {useEffect, useState} from 'react'
import ConsumerList from './../constants/ConsumerList'
import { useSelector} from 'react-redux';
import Roles from './../constants/Role';

export default function ConsumerListPage() {
    const [shouldView, setShouldView] = useState(false);
    const userDetail = useSelector(state => state.user);

    useEffect(() => {
        if(userDetail.role) {
            setShouldView(Roles[`${userDetail.role}`].includes("CONSUMERS_DETAILS"));
        }
    }, [userDetail]);
    return (
        <div>
            {shouldView ? (
                <>
                    <h1>Consumer List</h1>
                    <ul>
                        { ConsumerList.map(item => (
                            <li key={item.id}>{item.name}</li>
                        )) }
                    </ul>
                </>
            ): ''}
        </div>
    )
}
