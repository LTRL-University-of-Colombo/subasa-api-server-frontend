export const useAuth = () => {
    // const user = localStorage.getItem("Token")
    const userToken = 'sssssssssssssssssssssnR5cCssssssssss.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const arrayToken = userToken.split('.');
    if (userToken) {
        const tokenPayload = JSON.parse(atob(arrayToken[1]));
        console.log(tokenPayload)
        return true
    }
    else {
        return false
    }
}

// const PrivateRouteProvider = () => {
//     const isLoggedIn = useAuth()
//     isLoggedIn ? <Outlet /> : <Navigate replace to={"/login"} />
// }

// export default PrivateRouteProvider