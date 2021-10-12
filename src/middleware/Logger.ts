import { AureolinMiddleware, Middleware, Context } from 'aureolin'

@Middleware()
export default class Logger implements AureolinMiddleware {
    use = (ctx: Context): void => {
        console.log('Logger middleware:', ctx.request.method, ctx.request.url)
    }
}
