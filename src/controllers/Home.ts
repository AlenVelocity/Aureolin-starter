import { Controller, Get } from 'aureolin'

@Controller('/')
export default class Index {
    @Get('/')
    public index(): string {
        return 'Welcome to Aureolin!'
    }

    @Get('about')
    public about(): Record<string, string> {
        return {
            name: 'Aureolin',
            version: '0.0.1',
            description: 'Aureolin is a Fast, Simple, and Flexible Framework for Node.js',
            npm: 'https://www.npmjs.com/package/aureolin',
            repository: 'https://github.com/Alensaito1/Aureolin'
        }
    }

    @Get('routes')
    public routes(): Record<string, string> {
        return {
            '/': 'Welcome to Aureolin!',
            '/about': 'About Aureolin',
            '/routes': 'Routes',
            '/hello/': 'Hello',
            '/hello/:name': 'Hello {name}',
            '/hello/:name/:age': 'Hello {name} {age}'
        }
    }
}
