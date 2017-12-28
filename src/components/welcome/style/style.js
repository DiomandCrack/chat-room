const style = {
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    login: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    loginTitle: {
        color: '#fff',
        fontWeight: 'normal'
    },
    loginBtn: {
        padding: '0.8rem 2.5rem',
        color: '#f1f1f1',
        background: '#41c199',
        fontSize: '1rem',
        borderRadius: '5px'
    },
    loginPromptCon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        background: 'rgba(30,30,30,0.3)',

    },
    loginPrompt: {
        position: 'absolute',
        width: '31.25rem',
        height: '16.5625rem',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        zIndex: '5',
        background: '#fff',
        margin: 'auto',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    loginPromptBtn: {

    }
}

export default style