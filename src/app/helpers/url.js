export const getQuery = (params) => {
    return '?' + new URLSearchParams(params)?.toString();
}