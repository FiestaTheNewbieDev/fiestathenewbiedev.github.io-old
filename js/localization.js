let translations = {};

window.addEventListener("DOMContentLoaded", () => {
    var userLang = navigator.language || navigator.userLanguage;
    if(userLang == "fr-FR") setLocale("fr");
    else setLocale("en");
});

const setLocale = async (newLocale) => {
    translations = await fetchTranslations(newLocale);
    translatePage();
};

const fetchTranslations = async (newLocale) => {
    const response = await fetch(`/lang/${newLocale}.json`);
    if (!response.ok) {
        console.log(`Could not fetch translations for locale ${newLocale}`);
    }
    return await response.json();
};

function translatePage() {
    document.querySelectorAll('[localization-key]').forEach((element) => {
        let key = element.getAttribute('localization-key');
        let translation = translations[key];
        element.innerText = translation;
    });
}