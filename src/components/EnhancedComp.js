
const EnhancedComp = (Component) => {
    return props => {
        const style = {color:'#fff', background:'#ccc', padding:'10px'};
        return(
            <Component style={style} {...props} />
        )
    }

}

export default EnhancedComp;