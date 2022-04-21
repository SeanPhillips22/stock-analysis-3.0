export async function get({ params }) {
    const symbol = params.symbol
    return {
        body: { symbol }
    }
}