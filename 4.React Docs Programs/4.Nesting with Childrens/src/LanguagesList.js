import React from 'react';
import Language from './Language'

const LanguagesList = ( {languages} ) => (
    <ul>
        {languages.map(lang => <Language language={lang} />) }
    </ul>
)

export default LanguagesList;