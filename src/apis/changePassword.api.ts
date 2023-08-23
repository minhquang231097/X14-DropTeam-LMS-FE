import http from "@/utils/http";

const handleChangePassword = async(value: any) => {
    console.log(value)
    await http
    .put('/user', {
        password:value.password,
        newPassword: value.newPassword,
    })
    .then((res)=>{
        console.log(res, "res")
    }).catch((e)=>{
        console.log(e,'e')
    })
}

export default handleChangePassword