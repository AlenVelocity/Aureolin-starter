import { AureolinMiddleware, Middleware, Context } from 'aureolin'

@Middleware()
export default class Aureolin implements AureolinMiddleware {
    public use = (ctx: Context): void => {
        ctx.res.setHeader('X-Powered-By', 'Aureolin')
    }
}
