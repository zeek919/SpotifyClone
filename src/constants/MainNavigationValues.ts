interface HeaderTypes {
    header: string,
    path: string
};

export type NavigationValuesTypes = Array<HeaderTypes>

export const MainNavigationValues: NavigationValuesTypes = [
    {header: 'Premium', path: '/premium'}, {header: 'Help', path: '/help'}, {header: 'Download', path: "/download"}
]