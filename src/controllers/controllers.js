import { pool } from "../db/db.js";
import router from "../routes/routes.js";

export const home = (req, res) => res.render('home', { title: 'Home' })

export const login = (req, res) => res.render('login', { title: 'Login' })

export const registro = (req, res) => res.render('registro', { title: 'Registro' })

export const crud = (req, res) => res.render('crud', { title: 'Crud' })

export const pruebaConex = async (req, res) => {
    try {
        const [resultado] = await pool.query('SELECT 1+1 as RESULT');
        res.json(resultado[0])
    } catch {
        res.send('no va');
    }
};

export const showUsers = async (req, res) => {
    try {
        const [resultado] = await pool.query('SELECT * From users as RESULT');
        res.json(resultado)
    } catch {
        res.send('no va');
    }
};


export const insertUser = async (req, res) => {
    const{nameUser, contrasena} = (req.body);
    const [rows] = await pool.query('INSERT INTO users (nameUser, contrasena)  VALUES (?,?) ' , [nameUser,contrasena]);
    res.send('ok');
};


export const authentication = async (req, res) => {
    const { nameUser, contrasena} =  req.body;
    const isOk = await isAuth(nameUser,contrasena);

    if(!nameUser || !contrasena || !isOk){
        let errorMessage = "escriba un usuario y contraseña";
        if (!isOk) {
            errorMessage  = "usuario o contraseña incorrecto";

            res.status(400).send(errorMessage);
            } else{
                res.status(200).send("login correcto");
            }

        }
    }

    const isAuth = async (nameUser, contrasena) => {
 
        if (!nameUser || !contrasena) {
            console.error("Faltan datos para la autenticación")
            return false
        }
     
        try {
     
            const result = await pool.query('SELECT * FROM users WHERE nameUser', [nameUser])
            const user = result.rows[0]
     
            if (!user) {
                throw new Error("No se encontró un usuario con ese nombre")
            }
     
            const ok = await compare(contrasena, contrasena)
            if (ok) {
                console.log("Autenticación exitosa")
                return true
            }
     
        } catch (err) {
            console.error(err)
        }
     
        return false
    }