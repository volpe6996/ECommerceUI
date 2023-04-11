const CategoryTile = ({ id, img, title }) => {
    return (
        <>
            <div className="categoryTile">
            <div className={`${id} image`}>
                <img src={img} height="80" />
            </div>
                <div className="title">
                    <h4>{title}</h4>
                </div>
            </div>
        </>
    );
}

export default CategoryTile;