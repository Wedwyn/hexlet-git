const capitalize = (text) => {
    if (text === '') {
        return '';
    }
    const firstChar = text[0].toUpperCase();
    const textWithoutFirst = text.slice(1);
    return `${firstChar}${textWithoutFirst}`;
}

export default capitalize;