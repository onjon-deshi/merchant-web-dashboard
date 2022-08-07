var arr = {};
var PostLoginGetApi = async (API_END_POINT="", REQUEST_BODY="") => {
    try {
        await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_PREFIX_PRIVATE + API_END_POINT, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
                'Authorization': 'Bearer '+window.localStorage.getItem("UserToken")
            })
        })
        .then(res => res.json())
        .then((result)=>{
                arr['status'] = 1;
                arr['data'] = result;
            },(error)=>{
                arr['data'] = error;
            }
        );
    }
    catch(err) {
        arr['data'] = err;
    }
    finally {
        return arr;
    }
}

export default PostLoginGetApi;

