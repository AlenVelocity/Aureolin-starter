import { h, Controller, Get, ControllerMiddleware, Inject } from 'aureolin'
import { IRepo } from '../common/Types'
import Head from '../components/Head'
import Aureolin from '../components/Aureolin'
import { AureolinX } from '../middleware/AureolinX'
import HTTPProvider from '../providers/HTTPProvider'

@Controller('/')
@ControllerMiddleware([AureolinX()])
export default class HomeController {
    constructor(@Inject('http') private http: HTTPProvider) {}

    @Get('/')
    public async index(): Promise<JSX.Element> {
        const { stargazers_count, forks_count } = await this.http.get<IRepo>(
            'https://api.github.com/repos/alensaito1/aureolin'
        )
        return (
            <html>
                <Head />
                <body>
                    <Aureolin stargazers_count={stargazers_count} forks_count={forks_count} />
                </body>
            </html>
        )
    }
}
