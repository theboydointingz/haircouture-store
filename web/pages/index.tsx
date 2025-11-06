import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then(r => r.json())
export default function Home(){
  const { data } = useSWR('/api/products', fetcher)
  return (
    <div style={{fontFamily: 'Inter, system-ui, sans-serif', padding: 24, maxWidth: 1000, margin: '0 auto'}}>
      <h1 style={{fontSize: 28, fontWeight: 700, marginBottom: 16}}>Our Wigs</h1>
      <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16}}>
        {data?.map((p:any) => (
          <div key={p._id} style={{border: '1px solid #eee', padding: 12, borderRadius: 8}}>
            <img src={p.images?.[0] || '/placeholder.png'} alt={p.title} style={{height: 180, width: '100%', objectFit: 'cover', borderRadius:6}} />
            <h2 style={{marginTop:8, fontSize:16, fontWeight:600}}>{p.title}</h2>
            <p>R{p.price}</p>
          </div>
        )) || <p>Loading products...</p>}
      </div>
    </div>
  )
}
