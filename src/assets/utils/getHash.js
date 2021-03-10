const GET_HASH = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

export default GET_HASH