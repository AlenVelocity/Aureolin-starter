import { Context, NextFunction } from 'aureolin'

export default () =>
    async (ctx: Context, next: NextFunction): Promise<void> => {
        ctx.res.setHeader('X-Aureolin', 'Aureolin')
        ctx.res.setHeader('X-Aureolin-Version', '0.0.7-0')
        return await next()
    }
