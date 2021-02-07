import React, {useEffect, useState} from 'react'
import OperationsList from './../constants/OperationsList'
import { useSelector} from 'react-redux';
import Roles from './../constants/Role';

export default function OperationsListPage() {
    const [shouldView, setShouldView] = useState(false);
    const userDetail = useSelector(state => state.user);

    useEffect(() => {
        if(userDetail.role) {
            setShouldView(Roles[`${userDetail.role}`].includes("OPERATIONS_DETAILS"));
        }
    }, [userDetail]);
    return (
        <div>
            {shouldView ? (
                <>
                    <h1>Operations List</h1>
                    <ul>
                        { OperationsList.map(item => (
                            <li key={item.id}>{item.name}</li>
                        )) }
                    </ul>
                </>
            ): ''}
        </div>
    )
}
