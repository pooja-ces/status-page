export async function fetchApiStatus(apiName) {
    // Here, you would implement the actual API calls
    const response = await fetch(`/api/status/${apiName}`);
    return response.status;
}
