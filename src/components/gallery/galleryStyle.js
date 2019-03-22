export const styles = {
    galleryContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'relative',
        top: 80
    },
    photo: {
        maxWidth: '30%',
        maxHeight: 150,
        minWidth: 100,
        flexFlow: 'row nowrap',
        alignItems: 'center',
        margin: 5,
        transition: 'all 1s',
        cursor: 'pointer',
        '&:hover':{
            transform: 'scale(1.2)'
        }
        
    },
  };