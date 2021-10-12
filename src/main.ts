import create from 'aureolin'
import { join } from 'path'

const path = (dir: string) => join(__dirname, dir)

const main = async () => {
    const port = (process.env.PORT || 3000) as number
    const app = await create({
        port,
        controllersPath: path('controllers'),
        middlewarePath: path('middleware')
    })
    app.logger.info('App Started')
    app.logger.info(`Listen on Port: ${port}`)
    app.logger.level = 'debug'
}

main()
