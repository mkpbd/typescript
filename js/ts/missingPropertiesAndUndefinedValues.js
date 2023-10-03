"use strict";
function applySettings(setting) {
    const themes = setting.theme;
    console.log(setting);
    return setting;
}
applySettings({ theme: 'dark', language: 'en' });
function getTheme(setting) {
    if ('theme' in setting) {
        return setting.theme;
    }
    return 'default';
}
const settingsLang = {
    language: "bn",
    theme: 'monokia'
};
const settingUndefinedTheme = {
    language: 'en',
    theme: 'light', // undifiend is not allow
};
function getTheme1(settings) {
    var _a;
    return (_a = settings.theme) !== null && _a !== void 0 ? _a : "default";
}
