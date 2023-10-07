export const dummy1SidebarItems = [
    { label: 'Category1', link: '/dummy1/cat1' },
    { label: 'Category2', link: '/dummy1/cat2' },
    { label: 'Category3', link: '/dummy1/cat3' },
    { label: 'Category4', link: '/dummy1/cat4' },
];

export enum Dummy1SidebarType {
    CATEGORY1 = 0,
    CATEGORY2 = 1,
    CATEGORY3 = 2,
    CATEGORY4 = 3,
}

const DUMMY1_SIDEBAR_TYPES: Record<Dummy1SidebarType, string> = {
    [Dummy1SidebarType.CATEGORY1]: 'cat1',
    [Dummy1SidebarType.CATEGORY2]: 'cat2',
    [Dummy1SidebarType.CATEGORY3]: 'cat3',
    [Dummy1SidebarType.CATEGORY4]: 'cat4',
}

export const getDummy1SidebarTypes = (type: Dummy1SidebarType): string => {
    return DUMMY1_SIDEBAR_TYPES[type];
}

export const isDummy1SidebarType = (type: string): boolean => {
    return Object.values(DUMMY1_SIDEBAR_TYPES).includes(type);
}
