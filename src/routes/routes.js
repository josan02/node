import { Router } from "express";
import{home, login, crud, registro,pruebaConex, showUsers, insertUser, authentication} from '../controllers/controllers.js';
const router = Router();


router.get('/', home);
router.get('/login', login );
router.get('/registro', registro);
router.get('/crud', crud);

//prueba de conexion
router.get( '/pruebaConex', pruebaConex);

//mostrar usuarios
router.get('/showUsers', showUsers);

//insertar usuarios
router.post('/insertUser', insertUser);

router.post('/auth', authentication);
export default router;