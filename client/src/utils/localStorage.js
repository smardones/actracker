export const loadState = () => {
    try {
        const existingState = localStorage.getItem('state');
        if (!existingState) {
            return undefined
        }
        return JSON.parse(existingState);
    }
    catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const preparedState = JSON.stringify(state);
        localStorage.setItem('state', preparedState);
    } catch {
        
    }
}