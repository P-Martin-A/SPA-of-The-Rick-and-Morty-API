import Header from '../template/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../assets/utils/getHash';
import resolveRoutes from '../assets/utils/resolveRoutes';

const ROUTES = {
  '/': Home,
  '/:id': Character,
}

const ROUTE = async () => {
  const $HEADER = null || document.getElementById('header'),
        $MAIN = null || document.getElementById('main')

  let hash = getHash(),
      route = await resolveRoutes(hash),
      render = ROUTES[route] ? ROUTES[route] : Error404

  $HEADER.innerHTML = await Header()

  $MAIN.innerHTML = await render()
}
 
export default ROUTE
