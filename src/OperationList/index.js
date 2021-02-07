import React, {useEffect, useState} from 'react'
import OperationsList from './../constants/OperationsList'
import { useSelector} from 'react-redux';
import Roles from './../constants/Role';
import translate from './../i18n/Translations/translate'

export default function OperationsListPage() {
    const [shouldView, setShouldView] = useState(false);
    const userDetail = useSelector(state => state.user);

    useEffect(() => {
        if(userDetail.user_detail.role) {
            setShouldView(Roles[`${userDetail.user_detail.role}`].includes("OPERATIONS_DETAILS"));
        }
    }, [userDetail]);
    return (
        <div>
            {shouldView ? (
                <>
                    <h1>{translate("operations-list-title")}</h1>
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
