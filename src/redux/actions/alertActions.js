export const setAlertAction = (str) => {
    return (
        {
            type: 'SET_ALERT',
            payload: str
        }
    )
};