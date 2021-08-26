import getCatFact from "../lib/cat_facts";

export async function getStaticProps(context) {
    const response = await getCatFact();
    return {
        props: { fact: response.fact }
    }
}

export default function Test(props) {
    return (
        <>
            <h1>Test page</h1>
            
            <div className="cat-fact-contaner">
                <h2>Cat Fact of the Day!</h2>
                <h3>{props.fact}</h3>
            </div>
        </>
    )
}