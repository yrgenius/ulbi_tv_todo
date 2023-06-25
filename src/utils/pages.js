export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPageArray = (totalPage) => {
    let pageArray = [];
    for (let i = 0; i < totalPage; i++) {
        pageArray.push(i + 1);
    }
    return pageArray;
}