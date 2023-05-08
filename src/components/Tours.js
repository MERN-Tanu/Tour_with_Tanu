import Card from './Cards'
function Tours({tours,removeTour})
{
    return(
    <div className='container'>
        <div>
            <h2 className='title'> Tour with Tanu</h2>
        </div>
    <div className='cards'>
        {
            tours.map((tours)=>{
                return <Card key={tours.id} {...tours} removeTour={removeTour}></Card>
            })
        }
        </div>
    </div>
    )
}

export default Tours;