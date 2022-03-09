
function Home(){

    return(
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>

            <label>
                Sub-Text:
                <input type="text" name="subtext" />
            </label>

            <label>
                Sub-Sub-Text:
                <input type="text" name="subsubtext" />
            </label>
            <br/><br/>
            <input type="submit" value="Submit" />

        </form>
    )
}

export default Home;