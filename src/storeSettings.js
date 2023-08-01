export const i18n = (state) => (value) => {
    if (isSettingPresent(state.i18n)) {
        const result = state.i18n.get(value)
        if (isResultDefined(result)) {
            return result
        }
    }
    return value
}

function isResultDefined(value) {
    return value !== undefined
} 

function isSettingPresent(value) {
    return typeof value === 'object'
}