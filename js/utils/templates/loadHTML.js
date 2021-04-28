export default function (htmlRelativeUrl, baseUrl) {
    // fetch resolves relative url using the document base URL
    const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
    return fetch(htmlUrl).then(response => response.text());
}
