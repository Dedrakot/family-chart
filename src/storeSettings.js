export const i18n = (state) => (value) => {
    if (isSettingPresent(state.i18n)) {
        const result = state.i18n.get(value)
        if (isResultDefined(result)) {
            return result
        }
    }
    return value
}

export const avatar = (state) => (d) => {
    let image = d.data.data.avatar
    if (!image) {
        image = state.defaultAvatar || null
    }
    return image
}

function isResultDefined(value) {
    return value !== undefined
} 

function isSettingPresent(value) {
    return typeof value === 'object'
}