export async function get({ params }) {
    const symbol = params.symbol

    const res = await fetch(`https://api.stockanalysis.com/wp-json/sa/statistics?symbol=${symbol}`)
    const data = await res.json()

    return {
        body: { symbol, data: data.data.data },
    }

}