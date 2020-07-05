export interface IRoutes {
    [key: string]: {
        LABEL: string,
        FULL_PATH: string
    }
}

export const ROUTES: IRoutes = {
    CONTINENT: {
        LABEL: 'Continent',
        FULL_PATH: '/',
    },
    ADVENTURE: {
        LABEL: 'Adventure',
        FULL_PATH: '/adventure'
    }
};
