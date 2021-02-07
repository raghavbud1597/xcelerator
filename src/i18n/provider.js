import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import translations from './Translations'
import { LOCALES } from './locales';

const Provider = ({children, locale = LOCALES.ENGLISH}) => {
    return <IntlProvider 
        locale={locale}
        textComponent={Fragment}
        messages={translations[locale]}
    >
        {children}
    </IntlProvider>

}

export default Provider;