import { Provider } from 'aureolin'

@Provider('package')
export default class PackageProvider {
    public get = async (): Promise<typeof import('../../package.json')> => {
        return import('../../package.json')
    }
}
