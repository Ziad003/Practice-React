import BK from "./Book"
export default function Book({Books}){
    return (
        <>
            <h1>Ammout of books: {Books.length}</h1>
        <ul>
            {
            Books.map((book,index)=><BK key={index} book={book}></BK>)
            }
        </ul>
        </>
    )
}