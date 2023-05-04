let translations = {};
const defaultLocale = "fr";

document.addEventListener("DOMContentLoaded", () => {
    setLocale(defaultLocale);
});

const setLocale = async (newLocale) => {
    translations = await fetchTranslations(newLocale);
    translatePage();
};

const fetchTranslations = async (newLocale) => {
    const response = await fetch(`lang/${newLocale}.json`);
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