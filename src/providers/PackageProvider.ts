import { Provider } from 'aureolin'

interface IPackage {
    name: string
    version: string
    description: string
    keywords: string[]
}

@Provider('package')
export default class PackageProvider {
    public get = async (): Promise<IPackage> => {
        return require('../../package.json')
    }
}
