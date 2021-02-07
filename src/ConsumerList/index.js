import React, {useEffect, useState} from 'react'
import ConsumerList from './../constants/ConsumerList'
import { useSelector} from 'react-redux';
import Roles from './../constants/Role';
import translate from './../i18n/Translations/translate'

export default function ConsumerListPage() {
    const [shouldView, setShouldView] = useState(false);
    const userDetail = useSelector(state => state.user);

    useEffect(() => {
        if(userDetail.user_detail.role) {
            setShouldView(Roles[`${userDetail.user_detail.role}`].includes("CONSUMERS_DETAILS"));
        }
    }, [userDetail]);
    return (
        <div>
            {shouldView ? (
                <>
                    <h1>{translate("consumer-list-title")}</h1>
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
