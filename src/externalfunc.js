const capitalizer = (str) => {
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return str = arr.join('');
};

export default capitalizer;