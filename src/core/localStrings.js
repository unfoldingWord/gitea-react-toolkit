//
// Translate strings into different languages
// Then use localString(id) to return the language specific string to use
//
const strings = {
    en:{
        OpenRepo: "Go to Repo",
        OpenOrg: "Go to Organization",
        StringMissing: "String Id missing",
        LangNotSupported:  "Language not supported"
    },
};

export const localString = (id) => {
    let lang = null;
    
    if (typeof window !== 'undefined' )
    {
        if (navigator) {
            lang = navigator.language.split(/-|_/)[0];
        }
    }
    // if language is unknown (not sure this can actually happen)
    if (!lang) {
        lang = 'en';
    }
    // if there are no strings for the language
    if ( strings[lang] === undefined ) {
        lang = 'en';
        return strings[lang]['LangNotSupported'];
    }
    let lstring = strings[lang][id];
    // if a string for the message id is missing
    if ( lstring === undefined ) {
        return strings[lang]['StringMissing']
    }
    return lstring;
};
