import { React, Controller, Get, Inject, ControllerMiddleware } from 'aureolin'
import { Aureolin } from '../components/Aureolin'
import type PackageProvider from '../providers/PackageProvider'
import type TimeProvider from '../providers/TimeProvider'
import AureolinX from '../middleware/AureolinX'
import Card from '../components/Card'

@Controller('/')
@ControllerMiddleware([AureolinX()])
export default class HomeController {
    constructor(@Inject('time') public tm: TimeProvider, @Inject('package') public pkg: PackageProvider) {}

    @Get('/')
    public index(): JSX.Element {
        return (<Aureolin/>)
    }

    @Get('about')
    public async about(): Promise<Record<string, string>> {
        return {
            name: 'Aureolin',
            version: (await this.pkg.get()).version,
            description: 'Aureolin is a Fast, Simple, and Flexible Framework for Node.js',
            npm: 'https://www.npmjs.com/package/aureolin',
            repository: 'https://github.com/Alensaito1/Aureolin'
        }
    }

    @Get('time')
    public time(): string {
        return this.tm.get()
    }

    @Get('routes')
    public routes(): Record<string, string> {
        return {
            '/': 'Welcome to Aureolin!',
            '/about': 'About Aureolin',
            '/time': 'Current time',
            '/routes': 'Routes',
            '/hello/': 'Hello',
            '/hello/:name': 'Hello {name}',
            '/hello/:name/:age': 'Hello {name} {age}',
            '/hello/:name/:age/:place': 'Hello {name} {age} {place}'
        }
    }
}
