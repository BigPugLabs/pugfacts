export default function MainContent(props) {
    return (
        <main className={props.darkMode? "dark" : ""}>
            <h1 className="main--title">Top Pug Facts</h1>
            <ul className="main--facts">
                <li>Pugs are snuggly</li>
                <li>Pugs are big</li>
                <li>Pug puppies are smol</li>
                <li>Pugs will stare at food</li>
                <li>Pugs can climb on top of logs</li>
                <li>Pugs sleep all day</li>
            </ul>
        </main>
    )
}
