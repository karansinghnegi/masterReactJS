import React from 'react';
import LanguagesList from './LanguagesList'

const MyComponent = ( {header, languages}) => {
    const formattedLanguages = languages.map(language => language.toUpperCase())

    return (
        <fieldset>
            <legend>{header}</legend>
            <LanguagesList languages={formattedLanguages} />
        </fieldset>
    )
}

export default MyComponent;