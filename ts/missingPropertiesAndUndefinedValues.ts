type Settings = {
    language: 'en' | 'bn' | 'pk' | 'us',
    theme: 'dracual' | 'monokia' | 'dark' | 'light',
}


function applySettings(setting: Settings): Settings {
    const themes = setting.theme;
    console.log(setting);

    return setting;
}
applySettings({ theme: 'dark', language: 'en' })



function getTheme(setting: Settings) {
    if ('theme' in setting) {
        return setting.theme
    }
    return 'default';
}

const settingsLang: Settings = {
    language: "bn",
    theme: 'monokia'
}

const settingUndefinedTheme: Settings = {
    language: 'en',
    theme: 'light', // undifiend is not allow
}

function getTheme1(settings: Settings) {
    return settings.theme ?? "default";
}

type Fn = typeof getTheme1;