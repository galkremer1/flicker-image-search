export const styles = {
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      flexBasis: '30%',
    },
    input: {
      marginLeft: 8,
      flex: 1,
      order: 1
    },
    iconButton: {
      padding: 10,
      order: 1
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
    searchContainer: {
      display: 'flex',
      padding: 10,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center'
    },
    appContainer: {
      textAlign: 'center'
    },
    appHeader: {
      backgroundColor: '#282c34',
      minHeight: 45,
      fontDize: 'calc(10px + 2vmin)',
      color: 'white',
      position: 'fixed',
      width: '100%',
      zIndex: 3
    },
    error: {
      position: 'relative',
      top: 125,
      color: 'red',
      fontSize: 40
    }
  };