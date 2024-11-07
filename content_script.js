// 获取URL参数
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 检查搜索词是否包含 'gg'
const searchQuery = getQueryParam('q');
if (searchQuery) {
    const query = searchQuery.toLowerCase();
    if (query.includes('gg')) {
        // 重定向到谷歌搜索
        const searchTerm = searchQuery.replace(/gg/gi, '').trim();
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        window.location.href = googleSearchUrl;
    } else if (query.includes('bd')) {
        // 重定向到百度搜索
        const searchTerm = searchQuery.replace(/bd/gi, '').trim();
        const baiduSearchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(searchTerm)}`;
        window.location.href = baiduSearchUrl;
    } else {
        // 标记这是从扩展来的请求
        document.documentElement.dataset.searchExtension = "1";
    }
}