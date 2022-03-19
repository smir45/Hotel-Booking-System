const Writereview = () => {
    return (
        <div>
            <h1>Write a Review</h1>
            <form>
                <label>
                    Title:
                    <input type="text" name="review" id="review"/>
                </label>
                <label>
                    Review:
                    <textarea name="comment"/>
                </label>
                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
}

export default Writereview;