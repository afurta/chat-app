// import bcrypt from "bcrypt"

interface IUserData{
    email:string
    password: any 
}

export const loginController = ({ email, password }: IUserData) => {
    try{
        
    }catch{
        console.log('Ошибка login')
    }
}

export const authController = async ({ email, password }: IUserData) => {
    try{
        // const userData = {
        //     email,
        //     password: await bcrypt.compare(password, '7')
        // }
        // console.log(userData)
    }catch{
        console.log('Ошибка login')
    }
}