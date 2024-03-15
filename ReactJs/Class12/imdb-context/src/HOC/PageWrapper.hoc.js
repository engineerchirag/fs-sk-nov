function withPageWrapperHOC (WrapperComponent){
    const obj = {
        name: "Vatan"
    };
    return (props) => {
        return (
            <div style={{ border: "1px solid red", padding: "15px", margin: "15px" }}>
                <WrapperComponent { ...obj} />
            </div>
        )
    }
}

export default withPageWrapperHOC;