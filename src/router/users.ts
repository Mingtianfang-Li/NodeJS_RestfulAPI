import express from 'express';

import { getAllUsers } from '../controllers/users';
import router from 'router';

export default (router: express.Router) => {
    router.get('/users', getAllUsers);
}